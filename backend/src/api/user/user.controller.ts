import { Body, Catch, Controller, Get, Next, Post, Put, Req, Res } from '@nestjs/common';
import { NextFunction, Request , Response } from 'express';

import { SignInDto, SignUpUserDto, UpdateUserDto } from '../../dto';

import { UserAuthService } from './user.service';

@Controller('users')
export class UserAuthController {

  public constructor(private readonly userAuthService: UserAuthService) {}

  @Put('')
  public async update(@Res() res: Response,@Body() body: UpdateUserDto) {
    try {

      const response = await this.userAuthService.update({ ...body });

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Post('create-admin')
  public async createAdmin(@Res() res: Response,@Body() body: SignUpUserDto) {
    try {

      const response = await this.userAuthService.signUp({ ...body }, true);

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Post('sign-in')
  public async signIn(@Res() res: Response, @Body() body: SignInDto) {
    try {

      const response = await this.userAuthService.signIn({ ...body });

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Post('sign-up')
  public async signUp(@Res() res: Response, @Body() body: SignUpUserDto) {
    try {

      const response = await this.userAuthService.signUp({ ...body });

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

}
