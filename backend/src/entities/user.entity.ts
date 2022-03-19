import { AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';

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

@Table({
  modelName: 'users',
  tableName: 'users',
  timestamps: false
})

export class users extends Model< usersI> {

  @PrimaryKey
  @AutoIncrement
  @Column 
  public id: number;

  @Column 
  public email: string;

  @Column 
  public name: string;

  @Column 
  public password: string;

  @Column 
  public phone_number: number;

  @Column 
  public is_admin: boolean;

  @Column 
  public created_at: Date;

  @Column 
  public deleted_at: Date;

  @Column 
  public updated_at: Date;

  @Column 
  public updated_by: number;

}
