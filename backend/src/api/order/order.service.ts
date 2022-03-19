import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from 'src/dto/order.dto';
import { ANY } from 'src/shared/common';

import {  } from '../../dto';
import * as models from '../../entities';
import { order_detail, products, shipping_details, users } from '../../entities';
import { Helper } from '../../shared';
import { generateMessages } from '../../utils';

@Injectable()
export class OrderService extends Helper {

    public constructor(
      @InjectModel(models.order_detail) private readonly orderRepo: typeof models.order_detail,
      @InjectModel(models.shipping_details) private readonly shippingDetailRepo: typeof models.shipping_details,
      @InjectModel(models.products) private readonly productsRepo: typeof models.products,
      ) {
      super();
    }

    public orderDetail = async (data) => {

      const { product_id: productId, user_id: userId } = data;

      const orders: ANY = this.shallowCopy(await this.shippingDetailRepo.findAll(
        {
          where: {
            deleted_at: null,
            user_id: 1,
            product_id: 1,
          },
          include: [
            {
              as: 'product',
              model: products,
              where: {
                deleted_at: null,
              }
            },
            {
              as: 'orderDetail',
              model: order_detail,
              where: {
                deleted_at: null,
              }
            },
          ]
        }
      ));

      return orders

    }

    public signInUserOrder = async (data) => {

      const { user_id: userId } = data;

      const orders: ANY = this.shallowCopy(await this.shippingDetailRepo.findAll(
        {
          where: {
            deleted_at: null,
            user_id: userId,
          },
          include: [
            {
              as: 'product',
              model: products,
              where: {
                deleted_at: null,
              }
            },
            {
              as: 'orderDetail',
              model: order_detail,
              where: {
                deleted_at: null,
              }
            },
          ]
        }
      ));
        
      return orders.map(x => ({
        id: x.id,
        created_at: x.orderDetail.created_at.slice(0,10),
        total_price: x.total_price,
        is_paid: x.orderDetail.is_paid,
      }))

    }

    public allOrder = async (data) => {

      const { user_id: userId, id } = data;

      const whereClauseforOrder: ANY = {
        deleted_at: null,
      }

      if (id) {
        whereClauseforOrder.id = Number(id);
      }

      const orders: ANY = this.shallowCopy(await this.shippingDetailRepo.findAll(
        {
          where: {
            ...whereClauseforOrder,
          },
          include: [
            {
              as: 'product',
              model: products,
              where: {
                deleted_at: null,
              }
            },
            {
              as: 'orderDetail',
              model: order_detail,
              where: {
                deleted_at: null,
              }
            },
            {
              as: 'user',
              model: users,
              where: {
                deleted_at: null,
              }
            }
          ]
        }
      ));
        
      return orders.map(x => ({
        id: x.id,
        postal_code: x.postal_code,
        city: x.city,
        country: x.country,
        payment_method: x.payment_method,
        address: x.address,
        created_at: x.orderDetail.created_at?.slice(0,10),
        total_price: x.total_price,
        is_paid: x.orderDetail.is_paid,
        paid_at: x.orderDetail.paid_at,
        user_name: x.user.name,
        is_delivered: x.orderDetail.is_delivered,
        delivered_at: x.orderDetail.delivered_at?.slice(0,10),
        product: x.product,
        quantity: x.quantity,
      }))

    }

    public create = async (data: CreateOrderDto) => {

      const {
        order_items: orderItems,
        payment_method: paymentMethod,
        shipping_details: { 
          address,
          city,
          country,
          postal_code: postalCode,
        },
        total_price: totalPrice,
        user_id: userId,
      } = data;

      const shippingDetailData: models.shipping_detailsI[] = orderItems.map((x) => ({
        product_id: x.id,
        address: address,
        city: city,
        country: country,
        postal_code: postalCode,
        total_price: totalPrice,
        payment_method: paymentMethod,
        quantity: x.qty,
        user_id: userId,
      }));

      await Promise.all(orderItems.map(async (p) => {

        const productCounts = this.shallowCopy(await this.productsRepo.findByPk(p.id)).count_in_stock;
        const countAfterCreation = productCounts - p.qty;

        await this.productsRepo.update({ count_in_stock: countAfterCreation }, { where: { id: p.id }, individualHooks: true, })

      }))

      const shippingDetailIds = this.shallowCopy(await this.shippingDetailRepo.bulkCreate(shippingDetailData)).map(o => o.id);

      const orderData: models.order_detailI[] = shippingDetailIds.map((o) => ({
        is_paid: false,
        is_delivered: false,
        shipping_detail_id: o,
        created_at: new Date(),
      }));

      await this.orderRepo.bulkCreate([ ...orderData ]);

      return shippingDetailIds;

    }

}
