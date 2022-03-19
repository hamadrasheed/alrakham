import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { users } from '../../entities';

import { UserAuthController } from './user.controller';
import { UserAuthService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      users,
    ])],
  controllers: [UserAuthController],
  providers: [UserAuthService]
})
export class UserAuthModule {}
