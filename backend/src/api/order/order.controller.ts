import { Body, Catch, Controller, Get, Next, Post, Req, Res, Query } from '@nestjs/common';
import { NextFunction, Request , Response } from 'express';
import { CreateOrderDto } from 'src/dto/order.dto';

import {  } from '../../dto';

import { OrderService } from './order.service';

@Controller('order')
export class OrderController {

  public constructor(private readonly orderService: OrderService) {}

  @Get('mine')
  public async signInUserOrder(@Res() res: Response, @Query() query) {
    try {

      const response = await this.orderService.signInUserOrder(query);

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Get('')
  public async allOrders(@Res() res: Response, @Query() query) {
    try {

      const response = await this.orderService.allOrder(query);

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Get('by-product-id')
  public async orderDetailByProductId(@Res() res: Response, @Query() query) {
    try {

      const response = await this.orderService.orderDetail(query);

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

  @Post('')
  public async create(@Res() res: Response, @Body() body: CreateOrderDto) {
    try {

      const response = await this.orderService.create(body);

      return res.status(200).json({
        message: 'success',
        result: response
      });

    } catch (error) {

      console.log(error);
      return res.status(error.status || 500).json({
        message: error.message || error.name || error
      });
    }
  }

}
