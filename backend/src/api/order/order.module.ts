import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { order_detail, shipping_details, products } from '../../entities';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      order_detail,
      shipping_details,
      products,
    ])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
