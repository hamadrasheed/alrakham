import { Model } from 'sequelize-typescript';
export interface userI {
    id?: number;
    email?: string;
    name?: string;
    password?: string;
    phone_number?: number;
    is_admin?: boolean;
    created_at?: Date;
    deleted_at?: Date;
    updated_at?: Date;
    updated_by?: number;
}
export declare class user extends Model<userI> {
    id: number;
    email: string;
    name: string;
    password: string;
    phone_number: number;
    is_admin: boolean;
    created_at: Date;
    deleted_at: Date;
    updated_at: Date;
    updated_by: number;
}
