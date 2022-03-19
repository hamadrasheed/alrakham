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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_dto_1 = require("../../dto/order.dto");
const order_service_1 = require("./order.service");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async signInUserOrder(res, query) {
        try {
            const response = await this.orderService.signInUserOrder(query);
            return res.status(200).json({
                message: 'success',
                result: response
            });
        }
        catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                message: error.message || error.name || error
            });
        }
    }
    async allOrders(res, query) {
        try {
            const response = await this.orderService.allOrder(query);
            return res.status(200).json({
                message: 'success',
                result: response
            });
        }
        catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                message: error.message || error.name || error
            });
        }
    }
    async orderDetailByProductId(res, query) {
        try {
            const response = await this.orderService.orderDetail(query);
            return res.status(200).json({
                message: 'success',
                result: response
            });
        }
        catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                message: error.message || error.name || error
            });
        }
    }
    async create(res, body) {
        try {
            const response = await this.orderService.create(body);
            return res.status(200).json({
                message: 'success',
                result: response
            });
        }
        catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                message: error.message || error.name || error
            });
        }
    }
};
__decorate([
    common_1.Get('mine'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "signInUserOrder", null);
__decorate([
    common_1.Get(''),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "allOrders", null);
__decorate([
    common_1.Get('by-product-id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "orderDetailByProductId", null);
__decorate([
    common_1.Post(''),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "create", null);
OrderController = __decorate([
    common_1.Controller('order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map