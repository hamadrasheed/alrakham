import { Model } from 'sequelize-typescript';
import { shipping_details } from './shipping.entity';
export interface order_detailI {
    id?: number;
    is_paid?: boolean;
    paid_at?: boolean;
    is_delivered?: boolean;
    delivered_at?: Date;
    shipping_detail_id?: number;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}
export declare class order_detail extends Model<order_detailI> {
    id: number;
    is_paid: boolean;
    paid_at: boolean;
    is_delivered: boolean;
    delivered_at: Date;
    shipping_detail_id: number;
    shippingDetails: typeof shipping_details;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
