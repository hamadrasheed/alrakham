import { UpdateProductDto } from 'src/dto/product.dto';
import * as models from '../../entities';
import { Helper } from '../../shared';
export declare class ProductService extends Helper {
    private readonly productsRepo;
    private readonly productReviewRepo;
    constructor(productsRepo: typeof models.products, productReviewRepo: typeof models.product_reviews);
    addReview: (data: any) => Promise<string>;
    get: (data: any) => Promise<models.products | models.products[]>;
    create: (data: any) => Promise<models.products>;
    update: (data: UpdateProductDto) => Promise<string>;
    delete: (data: any) => Promise<string>;
}
