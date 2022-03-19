import { Model } from 'sequelize-typescript';
export interface product_reviewsI {
    id?: number;
    review?: string;
    product_id?: number;
    user_id?: number;
    created_at?: Date;
    deleted_at?: Date;
    updated_at?: Date;
    updated_by?: number;
}
export declare class product_reviews extends Model<product_reviewsI> {
    id: number;
    review: string;
    product_id: number;
    user_id: number;
    created_at: Date;
    deleted_at: Date;
    updated_at: Date;
    updated_by: number;
}
