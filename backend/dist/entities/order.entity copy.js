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
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_detail = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let order_detail = class order_detail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], order_detail.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], order_detail.prototype, "is_paid", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], order_detail.prototype, "paid_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], order_detail.prototype, "is_delivered", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], order_detail.prototype, "delivered_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], order_detail.prototype, "shipping_detail_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], order_detail.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], order_detail.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], order_detail.prototype, "deleted_at", void 0);
order_detail = __decorate([
    sequelize_typescript_1.Table({
        modelName: 'order_detail',
        tableName: 'order_detail',
        timestamps: false
    })
], order_detail);
exports.order_detail = order_detail;
//# sourceMappingURL=order.entity%20copy.js.map