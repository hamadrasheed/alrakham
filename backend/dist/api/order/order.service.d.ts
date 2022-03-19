import { CreateOrderDto } from 'src/dto/order.dto';
import * as models from '../../entities';
import { Helper } from '../../shared';
export declare class OrderService extends Helper {
    private readonly orderRepo;
    private readonly shippingDetailRepo;
    private readonly productsRepo;
    constructor(orderRepo: typeof models.order_detail, shippingDetailRepo: typeof models.shipping_details, productsRepo: typeof models.products);
    orderDetail: (data: any) => Promise<any>;
    signInUserOrder: (data: any) => Promise<any>;
    allOrder: (data: any) => Promise<any>;
    create: (data: CreateOrderDto) => Promise<number[]>;
}
