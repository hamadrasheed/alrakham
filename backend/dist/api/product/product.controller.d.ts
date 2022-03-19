import { Response } from 'express';
import { UpdateProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    get(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    addReview(res: Response, body: any): Promise<Response<any, Record<string, any>>>;
    create(res: Response, body: any): Promise<Response<any, Record<string, any>>>;
    update(res: Response, body: UpdateProductDto): Promise<Response<any, Record<string, any>>>;
    delete(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
}
