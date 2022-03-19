"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const entities_1 = require("./entities");
const utils_1 = require("./utils");
const api_1 = require("./api");
const cors = require("cors");
const dotenv = require("dotenv");
const order_module_1 = require("./api/order/order.module");
dotenv.config({ path: '.env' });
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cors(), utils_1.authenticate)
            .exclude({ path: '/api/users/sign-in', method: common_1.RequestMethod.POST }, { path: '/api/users/sign-up', method: common_1.RequestMethod.POST }, { path: '/api/products', method: common_1.RequestMethod.GET })
            .forRoutes({
            path: '*', method: common_1.RequestMethod.ALL
        });
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                models: [...entities_1.models],
                logging: false,
            }),
            api_1.UserAuthModule,
            api_1.ProductModule,
            order_module_1.OrderModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map