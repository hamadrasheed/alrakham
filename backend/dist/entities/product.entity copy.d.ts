import { Model } from 'sequelize-typescript';
export interface productsI {
    id?: number;
    image_url?: string;
    name?: string;
    brand?: string;
    price?: string;
    category?: string;
    count_in_stock?: number;
    description?: string;
    created_at?: Date;
    deleted_at?: Date;
    updated_at?: Date;
    updated_by?: number;
}
export declare class products extends Model<productsI> {
    id: number;
    image_url: string;
    name: string;
    brand: string;
    price: string;
    category: string;
    count_in_stock: number;
    description: string;
    created_at: Date;
    deleted_at: Date;
    updated_at: Date;
    updated_by: number;
}
