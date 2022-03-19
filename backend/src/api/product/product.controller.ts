import { Body, Catch, Controller, Get, Next, Post, Req, Res, Query, Put, Delete } from '@nestjs/common';
import { NextFunction, Request , Response } from 'express';
import { UpdateProductDto } from 'src/dto/product.dto';

import {  } from '../../dto';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {

  public constructor(private readonly productService: ProductService) {}

  @Get('')
  public async get(@Res() res: Response, @Query() query) {
    try {

      const response = await this.productService.get(query);

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

  @Post('review')
  public async addReview(@Res() res: Response, @Body() body) {
    try {

      const response = await this.productService.addReview(body);

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
  public async create(@Res() res: Response, @Body() body) {
    try {

      const response = await this.productService.create(body);

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

  @Put('')
  public async update(@Res() res: Response, @Body() body: UpdateProductDto) {
    try {

      const response = await this.productService.update(body);

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

  @Delete('')
  public async delete(@Res() res: Response, @Query() query) {
    try {

      const response = await this.productService.delete(query);

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
