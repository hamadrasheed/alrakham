import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as  bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { SignInDto, SignUpUserDto, UpdateUserDto } from '../../dto';
import * as models from '../../entities';
import { Helper } from '../../shared';
import { generateMessages } from '../../utils';

@Injectable()
export class UserAuthService extends Helper {

    public constructor(
      @InjectModel(models.users) private readonly userRepo: typeof models.users,
      ) {
      super();
    }

    public update = async (data: UpdateUserDto) => {

      const {
        id,
        user_id: userId,
        name,
        phone_number,
        email,
        password,
      } = data;

      await this.userRepo.update(
        {
          updated_at: new Date(),
          updated_by: userId,
          name,
          password,
          phone_number,
          email
        },
        {
          where: { id },
          individualHooks: true
        }
      )

      return "User SuccessFully Updated!"

    }

    public signIn = async (data: SignInDto) => {

      const {
        email,
        password,
      } = data;

      const signInUser: models.users = this.shallowCopy(await this.userRepo.findOne({
        where: {
          deleted_at: null,
          email,
        },
      }));

      if (!signInUser || !Object.keys(signInUser).length) {
        throw generateMessages('AUTH_FAILED');
      }

      const { password: userPassword } = signInUser;
      const bcryptedPassword: boolean = await bcrypt.compare(password, userPassword);

      if (!bcryptedPassword) {
        throw generateMessages('AUTH_FAILED');
      }

      const userToken: string = jwt.sign(
        {
          email: signInUser.email,
          employee_id: signInUser.id,
          name: signInUser.name,
        },
        process.env.PRIVATE_KEY,
        {
          expiresIn: '24h',
        }
      );

      delete signInUser.password;

      const response = {
          ...signInUser,
          token: userToken
      };

      return  {
        ...response
      };

    }


    public signUp = async (data: SignUpUserDto, isSuperAdmin?: boolean) => {

      const {
        name,
        email,
        password,
        phone_number: phoneNumber
      } = data;

      const bcryptPassword: string = await bcrypt.hash(password, 1);

      if (!bcryptPassword || !bcryptPassword.length) {
        throw generateMessages('AUTH_FAILED');
      }

      const createUserObject: models.usersI = {
        email,
        name,
        password: bcryptPassword,
        phone_number: phoneNumber
      };

      if (isSuperAdmin) {
        createUserObject.is_admin = true
      }

      await this.userRepo.create(
        {
          ...createUserObject
        }
      );

      return 'User Created Successfulluy!';

    }

}
