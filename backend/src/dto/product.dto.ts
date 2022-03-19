import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from 'class-validator';


export class UpdateProductDto {

    @IsNotEmpty()
    @IsNumber()
    public user_id: number;    

    @IsNotEmpty()
    @IsNumber()
    public id: number;

    @IsString()
    @IsOptional()
    public name: string;

    @IsNumber()
    @IsOptional()
    public price: number;

    @IsString()
    @IsOptional()
    public image_url: string;

    @IsString()
    @IsOptional()
    public brand: string;

    @IsString()
    @IsOptional()
    public category: string;
    
    @IsNumber()
    @IsOptional()
    public count_in_stock: number;
    
    @IsString()
    @IsOptional()
    public description: string;

}
