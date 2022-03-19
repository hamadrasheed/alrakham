import { AutoIncrement, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { product_reviews } from '.';

export interface productsI {
  id?: number;
  image_url?: string;
  name?: string;
  brand?: string;
  price?: number;
  category?: string;
  count_in_stock?: number;
  description?: string;
  created_at?: Date;
  deleted_at?: Date;
  updated_at?: Date;
  updated_by?: number;
}

@Table({
  modelName: 'products',
  tableName: 'products',
  timestamps: false
})

export class products extends Model< productsI> {

  @PrimaryKey
  @AutoIncrement
  @Column 
  public id: number;

  @Column
  public image_url: string;
  
  @Column
  public name: string;
  
  @Column
  public brand: string;
  
  @Column
  public price: number;
  
  @Column
  public category: string;
  
  @Column
  public count_in_stock: number;
  
  @Column
  public description: string;

  @Column 
  public created_at: Date;

  @Column 
  public deleted_at: Date;

  @Column 
  public updated_at: Date;

  @Column 
  public updated_by: number;

  @HasMany((): typeof product_reviews => product_reviews)
  public productReviews: typeof product_reviews;


}
