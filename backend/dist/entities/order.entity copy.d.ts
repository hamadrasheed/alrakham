import { Model } from 'sequelize-typescript';
export interface order_detailI {
    id: number;
    is_paid: boolean;
    paid_at: boolean;
    is_delivered: boolean;
    delivered_at: Date;
    shipping_detail_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
export declare class order_detail extends Model<order_detailI> {
    id: number;
    is_paid: boolean;
    paid_at: boolean;
    is_delivered: boolean;
    delivered_at: Date;
    shipping_detail_id: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
