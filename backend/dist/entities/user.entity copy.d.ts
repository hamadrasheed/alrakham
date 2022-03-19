import { Model } from 'sequelize-typescript';
export interface usersI {
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
export declare class users extends Model<usersI> {
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
