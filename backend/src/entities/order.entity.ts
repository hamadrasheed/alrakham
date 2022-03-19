import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
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

@Table({
  modelName: 'order_detail',
  tableName: 'order_detail',
  timestamps: false
})

export class order_detail extends Model< order_detailI> {

  @PrimaryKey
  @AutoIncrement
  @Column 
  public id: number;

  @Column
  public is_paid: boolean;
  
  @Column
  public paid_at: boolean;
  
  @Column
  public is_delivered: boolean;
  
  @Column
  public delivered_at: Date;
  
  @ForeignKey((): typeof shipping_details => shipping_details)
  @Column
  public shipping_detail_id: number;

  @BelongsTo((): typeof shipping_details => shipping_details)
  public shippingDetails: typeof shipping_details;
  
  @Column
  public created_at: Date;
  
  @Column
  public updated_at: Date;
  
  @Column
  public deleted_at: Date;

}
