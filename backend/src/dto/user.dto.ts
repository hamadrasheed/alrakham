import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from 'class-validator';

export class SignUpUserDto {
    @IsEmail()
    @IsNotEmpty()
    public email: string;
    
    @IsString()
    public name: string;
    
    @IsString()
    @IsNotEmpty()
    public password: string;

    @IsNumber()
    @IsOptional()
    public phone_number: number
    
}

export class SignInDto {
    
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    public password: string;
}

export class UpdateUserDto {
    
    @IsEmail()
    public email: string;

    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsString()
    public name: string;

    @IsNumber()
    @IsOptional()
    public phone_number: number; 

    @IsString()
    @IsOptional()
    public password: string;

    @IsNumber()
    public user_id: number
}
