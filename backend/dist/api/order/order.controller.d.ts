import { Response } from 'express';
import { CreateOrderDto } from 'src/dto/order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    signInUserOrder(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    allOrders(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    orderDetailByProductId(res: Response, query: any): Promise<Response<any, Record<string, any>>>;
    create(res: Response, body: CreateOrderDto): Promise<Response<any, Record<string, any>>>;
}
