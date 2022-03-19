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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const sequelize_2 = require("sequelize");
const product_dto_1 = require("../../dto/product.dto");
const models = require("../../entities");
const shared_1 = require("../../shared");
let ProductService = class ProductService extends shared_1.Helper {
    constructor(productsRepo, productReviewRepo) {
        super();
        this.productsRepo = productsRepo;
        this.productReviewRepo = productReviewRepo;
        this.addReview = async (data) => {
            const { user_id, product_id, review, } = data;
            await this.productReviewRepo.create({
                product_id,
                user_id,
                review
            });
            return 'Added successfully!';
        };
        this.get = async (data) => {
            const { search_by: searchBy, id } = data || {};
            let whereClause = {
                deleted_at: null,
            };
            if (id) {
                return this.productsRepo.findOne({
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
                });
            }
            if (searchBy) {
                whereClause = Object.assign(Object.assign({}, whereClause), { [sequelize_2.Op.or]: [
                        sequelize_2.Sequelize.where(sequelize_2.Sequelize.col('name'), {
                            [sequelize_2.Op.like]: `%${searchBy}%`
                        }),
                        sequelize_2.Sequelize.where(sequelize_2.Sequelize.col('brand'), {
                            [sequelize_2.Op.like]: `%${searchBy}%`
                        }),
                        sequelize_2.Sequelize.where(sequelize_2.Sequelize.col('category'), {
                            [sequelize_2.Op.like]: `%${searchBy}%`
                        }),
                        sequelize_2.Sequelize.where(sequelize_2.Sequelize.col('description'), {
                            [sequelize_2.Op.like]: `%${searchBy}%`
                        }),
                    ] });
            }
            return this.productsRepo.findAll({
                where: Object.assign({}, whereClause),
                include: {
                    as: 'productReviews',
                    model: models.product_reviews,
                    where: {
                        deleted_at: null
                    },
                    required: false
                }
            });
        };
        this.create = async (data) => {
            const { name, price, image_url: imageUrl, brand, category, count_in_stock: countInStock, description } = data;
            return this.productsRepo.create({
                name,
                price,
                image_url: imageUrl,
                brand,
                category,
                count_in_stock: countInStock,
                description
            });
        };
        this.update = async (data) => {
            const { id, user_id, name, price, image_url: imageUrl, brand, category, count_in_stock: countInStock, description } = data;
            await this.productsRepo.update({
                updated_by: user_id,
                updated_at: new Date(),
                name,
                price,
                image_url: imageUrl,
                brand,
                category,
                count_in_stock: countInStock,
                description
            }, {
                where: { id },
                individualHooks: true
            });
            return "Updated Successfully!";
        };
        this.delete = async (data) => {
            const { id, user_id, } = data;
            await this.productsRepo.update({
                updated_by: user_id,
                deleted_at: new Date(),
            }, {
                where: { id },
                individualHooks: true
            });
            return "Deleted Successfully!";
        };
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(models.products)),
    __param(1, sequelize_1.InjectModel(models.product_reviews)),
    __metadata("design:paramtypes", [Object, Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map