import { Response } from 'express';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    get(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    create(res: Response, body: any): Promise<Response<any, Record<string, any>>>;
}
