import { SignInDto, SignUpUserDto, UpdateUserDto } from '../../dto';
import * as models from '../../entities';
import { Helper } from '../../shared';
export declare class UserAuthService extends Helper {
    private readonly userRepo;
    constructor(userRepo: typeof models.users);
    update: (data: UpdateUserDto) => Promise<string>;
    signIn: (data: SignInDto) => Promise<{
        token: string;
        id: number;
        email: string;
        name: string;
        password: string;
        phone_number: number;
        is_admin: boolean;
        created_at: Date;
        deleted_at: Date;
        updated_at: Date;
        updated_by: number;
        createdAt?: any;
        updatedAt?: any;
        deletedAt?: any;
        version?: any;
        _attributes: models.usersI;
        _creationAttributes: models.usersI;
        isNewRecord: boolean;
        sequelize: import("sequelize/types").Sequelize;
        _model: import("sequelize/types").Model<models.usersI, models.usersI>;
    }>;
    signUp: (data: SignUpUserDto, isSuperAdmin?: boolean) => Promise<string>;
}
