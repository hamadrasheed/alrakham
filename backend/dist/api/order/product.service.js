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
const models = require("../../entities");
const shared_1 = require("../../shared");
let ProductService = class ProductService extends shared_1.Helper {
    constructor(productsRepo) {
        super();
        this.productsRepo = productsRepo;
        this.get = async (data) => {
            if (data && Object.keys(data).length) {
                return this.productsRepo.findOne({
                    where: Object.assign({ deleted_at: null }, data)
                });
            }
            ;
            return this.productsRepo.findAll({
                where: {
                    deleted_at: null
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
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(models.products)),
    __metadata("design:paramtypes", [Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map