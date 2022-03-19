import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op, Sequelize } from 'sequelize';
import { UpdateProductDto } from 'src/dto/product.dto';

import {  } from '../../dto';
import * as models from '../../entities';
import { Helper } from '../../shared';
import { generateMessages } from '../../utils';

@Injectable()
export class ProductService extends Helper {

    public constructor(
      @InjectModel(models.products) private readonly productsRepo: typeof models.products,
      @InjectModel(models.product_reviews) private readonly productReviewRepo: typeof models.product_reviews,
      ) {
      super();
    }

    public addReview = async (data) => {
      
      const {
        user_id,
        product_id,
        review,
      } = data;

      await this.productReviewRepo.create({
        product_id,
        user_id,
        review
      })

      return 'Added successfully!'

    }

    public get = async (data) => {

      const { search_by: searchBy, id } = data || {};

      let whereClause: any = {
        deleted_at: null,
      }

      if (id) {
        return this.productsRepo.findOne(
          {
            where: {
              deleted_at: null,
              id
            },
            include: {
              as: 'productReviews',
              model: models.product_reviews,
              where: {
                deleted_at: null
              },
              required: false
            }
          }
        )
      }

      if (searchBy) {
        whereClause = {
          ...whereClause,
          [Op.or]: [

            Sequelize.where(Sequelize.col('name'), {
                [Op.like]: `%${searchBy}%`
            }),

            Sequelize.where(Sequelize.col('brand'), {
                [Op.like]: `%${searchBy}%`
            }),

            Sequelize.where(Sequelize.col('category'), {
                [Op.like]: `%${searchBy}%`
            }),

            Sequelize.where(Sequelize.col('description'), {
              [Op.like]: `%${searchBy}%`
          }),
          ]
        }
      }

      return this.productsRepo.findAll(
        {
          where: {
            ...whereClause
          },
          include: {
            as: 'productReviews',
            model: models.product_reviews,
            where: {
              deleted_at: null
            },
            required: false
          }
        }
      );

    }

    public create = async (data) => {
      const {
        name,
        price,
        image_url: imageUrl,
        brand,
        category,
        count_in_stock: countInStock,
        description
      } = data;


      return this.productsRepo.create(
        {
          name,
          price,
          image_url: imageUrl,
          brand,
          category,
          count_in_stock: countInStock,
          description
        }
      );

    }

    public update = async (data: UpdateProductDto) => {
      const {
        id,
        user_id,
        name,
        price,
        image_url: imageUrl,
        brand,
        category,
        count_in_stock: countInStock,
        description
      } = data;

      await this.productsRepo.update(
        {
          updated_by: user_id,
          updated_at: new Date(),
          name,
          price,
          image_url: imageUrl,
          brand,
          category,
          count_in_stock: countInStock,
          description
        },
        {
          where: { id },
          individualHooks: true
        }
      );

      return "Updated Successfully!"

    }

    public delete = async (data) => {
      const {
        id,
        user_id,
      } = data;

      await this.productsRepo.update(
        {
          updated_by: user_id,
          deleted_at: new Date(),
        },
        {
          where: { id },
          individualHooks: true
        }
      );

      return "Deleted Successfully!"

    }

}
