import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { products, product_reviews } from '../../entities';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      products,
      product_reviews
    ])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
