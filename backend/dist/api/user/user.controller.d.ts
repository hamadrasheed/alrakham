import { Response } from 'express';
import { SignInDto, SignUpUserDto, UpdateUserDto } from '../../dto';
import { UserAuthService } from './user.service';
export declare class UserAuthController {
    private readonly userAuthService;
    constructor(userAuthService: UserAuthService);
    update(res: Response, body: UpdateUserDto): Promise<Response<any, Record<string, any>>>;
    createAdmin(res: Response, body: SignUpUserDto): Promise<Response<any, Record<string, any>>>;
    signIn(res: Response, body: SignInDto): Promise<Response<any, Record<string, any>>>;
    signUp(res: Response, body: SignUpUserDto): Promise<Response<any, Record<string, any>>>;
}
