import { AutoIncrement, BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
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

@Table({
  modelName: 'shipping_details',
  tableName: 'shipping_details',
  timestamps: false
})

export class shipping_details extends Model< shipping_detailsI> {

  @PrimaryKey
  @AutoIncrement
  @Column 
  public id: number;
  
  @Column
  public address: string;
  
  @Column
  public city: string;
  
  @Column
  public postal_code: number;
  
  @Column
  public country: string;
  
  @Column
  public quantity: number;
  
  @Column
  public total_price: number;
  
  @Column
  public payment_method: string;
  
  @ForeignKey((): typeof products => products)
  @Column
  public product_id: number;

  @BelongsTo((): typeof products => products)
  public product: typeof products;

  @BelongsTo((): typeof users => users)
  public user: typeof users;
  
  @HasOne((): typeof order_detail => order_detail)
  public orderDetail: typeof order_detail;

  @ForeignKey((): typeof users => users)
  @Column
  public user_id: number;
  
  @Column
  public created_at: Date;
  
  @Column
  public updated_at: Date;
  
  @Column
  public deleted_at: Date;

}
