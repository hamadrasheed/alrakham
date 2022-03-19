import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { products } from '.';

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

@Table({
  modelName: 'product_reviews',
  tableName: 'product_reviews',
  timestamps: false
})

export class product_reviews extends Model< product_reviewsI> {

  @PrimaryKey
  @AutoIncrement
  @Column 
  public id: number;

  @Column 
  public review: string;

  @ForeignKey((): typeof products => products)
  @Column 
  public product_id: number;

  @Column 
  public user_id: number;

  @Column 
  public created_at: Date;

  @Column 
  public deleted_at: Date;

  @Column 
  public updated_at: Date;

  @Column 
  public updated_by: number;

}
