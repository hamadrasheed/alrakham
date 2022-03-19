import * as models from '../../entities';
import { Helper } from '../../shared';
export declare class ProductService extends Helper {
    private readonly productsRepo;
    constructor(productsRepo: typeof models.products);
    get: (data: any) => Promise<models.products | models.products[]>;
    create: (data: any) => Promise<models.products>;
}
