"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_dto_1 = require("../../dto/order.dto");
const common_2 = require("../../shared/common");
const models = require("../../entities");
const entities_1 = require("../../entities");
const shared_1 = require("../../shared");
let OrderService = class OrderService extends shared_1.Helper {
    constructor(orderRepo, shippingDetailRepo, productsRepo) {
        super();
        this.orderRepo = orderRepo;
        this.shippingDetailRepo = shippingDetailRepo;
        this.productsRepo = productsRepo;
        this.orderDetail = async (data) => {
            const { product_id: productId, user_id: userId } = data;
            const orders = this.shallowCopy(await this.shippingDetailRepo.findAll({
                where: {
                    deleted_at: null,
                    user_id: 1,
                    product_id: 1,
                },
                include: [
                    {
                        as: 'product',
                        model: entities_1.products,
                        where: {
                            deleted_at: null,
                        }
                    },
                    {
                        as: 'orderDetail',
                        model: entities_1.order_detail,
                        where: {
                            deleted_at: null,
                        }
                    },
                ]
            }));
            return orders;
        };
        this.signInUserOrder = async (data) => {
            const { user_id: userId } = data;
            const orders = this.shallowCopy(await this.shippingDetailRepo.findAll({
                where: {
                    deleted_at: null,
                    user_id: userId,
                },
                include: [
                    {
                        as: 'product',
                        model: entities_1.products,
                        where: {
                            deleted_at: null,
                        }
                    },
                    {
                        as: 'orderDetail',
                        model: entities_1.order_detail,
                        where: {
                            deleted_at: null,
                        }
                    },
                ]
            }));
            return orders.map(x => ({
                id: x.id,
                created_at: x.orderDetail.created_at.slice(0, 10),
                total_price: x.total_price,
                is_paid: x.orderDetail.is_paid,
            }));
        };
        this.allOrder = async (data) => {
            const { user_id: userId, id } = data;
            const whereClauseforOrder = {
                deleted_at: null,
            };
            if (id) {
                whereClauseforOrder.id = Number(id);
            }
            const orders = this.shallowCopy(await this.shippingDetailRepo.findAll({
                where: Object.assign({}, whereClauseforOrder),
                include: [
                    {
                        as: 'product',
                        model: entities_1.products,
                        where: {
                            deleted_at: null,
                        }
                    },
                    {
                        as: 'orderDetail',
                        model: entities_1.order_detail,
                        where: {
                            deleted_at: null,
                        }
                    },
                    {
                        as: 'user',
                        model: entities_1.users,
                        where: {
                            deleted_at: null,
                        }
                    }
                ]
            }));
            return orders.map(x => {
                var _a, _b;
                return ({
                    id: x.id,
                    postal_code: x.postal_code,
                    city: x.city,
                    country: x.country,
                    payment_method: x.payment_method,
                    address: x.address,
                    created_at: (_a = x.orderDetail.created_at) === null || _a === void 0 ? void 0 : _a.slice(0, 10),
                    total_price: x.total_price,
                    is_paid: x.orderDetail.is_paid,
                    paid_at: x.orderDetail.paid_at,
                    user_name: x.user.name,
                    is_delivered: x.orderDetail.is_delivered,
                    delivered_at: (_b = x.orderDetail.delivered_at) === null || _b === void 0 ? void 0 : _b.slice(0, 10),
                    product: x.product,
                    quantity: x.quantity,
                });
            });
        };
        this.create = async (data) => {
            const { order_items: orderItems, payment_method: paymentMethod, shipping_details: { address, city, country, postal_code: postalCode, }, total_price: totalPrice, user_id: userId, } = data;
            const shippingDetailData = orderItems.map((x) => ({
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
                await this.productsRepo.update({ count_in_stock: countAfterCreation }, { where: { id: p.id }, individualHooks: true, });
            }));
            const shippingDetailIds = this.shallowCopy(await this.shippingDetailRepo.bulkCreate(shippingDetailData)).map(o => o.id);
            const orderData = shippingDetailIds.map((o) => ({
                is_paid: false,
                is_delivered: false,
                shipping_detail_id: o,
                created_at: new Date(),
            }));
            await this.orderRepo.bulkCreate([...orderData]);
            return shippingDetailIds;
        };
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(models.order_detail)),
    __param(1, sequelize_1.InjectModel(models.shipping_details)),
    __param(2, sequelize_1.InjectModel(models.products)),
    __metadata("design:paramtypes", [Object, Object, Object])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map