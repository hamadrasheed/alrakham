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
exports.shipping_details = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const order_entity_1 = require("./order.entity");
const product_entity_1 = require("./product.entity");
const user_entity_1 = require("./user.entity");
let shipping_details = class shipping_details extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], shipping_details.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], shipping_details.prototype, "city", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "postal_code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], shipping_details.prototype, "country", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "quantity", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "total_price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], shipping_details.prototype, "payment_method", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => product_entity_1.products),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "product_id", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => product_entity_1.products),
    __metadata("design:type", Object)
], shipping_details.prototype, "product", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_entity_1.users),
    __metadata("design:type", Object)
], shipping_details.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => order_entity_1.order_detail),
    __metadata("design:type", Object)
], shipping_details.prototype, "orderDetail", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_entity_1.users),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], shipping_details.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], shipping_details.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], shipping_details.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], shipping_details.prototype, "deleted_at", void 0);
shipping_details = __decorate([
    sequelize_typescript_1.Table({
        modelName: 'shipping_details',
        tableName: 'shipping_details',
        timestamps: false
    })
], shipping_details);
exports.shipping_details = shipping_details;
//# sourceMappingURL=shipping.entity.js.map