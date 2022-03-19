import { Model } from 'sequelize-typescript';
import { usersI } from '.';
import { order_detail, order_detailI } from './order.entity';
import { products, productsI } from './product.entity';
import { users } from './user.entity';
export interface shipping_detailsI {
    id?: number;
    address?: string;
    city?: string;
    postal_code?: number;
    country?: string;
    quantity?: number;
    total_price?: number;
    payment_method?: string;
    product_id?: number;
    user_id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
    product?: productsI;
    user?: usersI;
    orderDetail?: order_detailI;
}
export declare class shipping_details extends Model<shipping_detailsI> {
    id: number;
    address: string;
    city: string;
    postal_code: number;
    country: string;
    quantity: number;
    total_price: number;
    payment_method: string;
    product_id: number;
    product: typeof products;
    user: typeof users;
    orderDetail: typeof order_detail;
    user_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
