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
exports.UserAuthController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../../dto");
const user_service_1 = require("./user.service");
let UserAuthController = class UserAuthController {
    constructor(userAuthService) {
        this.userAuthService = userAuthService;
    }
    async update(res, body) {
        try {
            const response = await this.userAuthService.update(Object.assign({}, body));
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
    async createAdmin(res, body) {
        try {
            const response = await this.userAuthService.signUp(Object.assign({}, body), true);
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
    async signIn(res, body) {
        try {
            const response = await this.userAuthService.signIn(Object.assign({}, body));
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
    async signUp(res, body) {
        try {
            const response = await this.userAuthService.signUp(Object.assign({}, body));
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
    common_1.Put(''),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "update", null);
__decorate([
    common_1.Post('create-admin'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.SignUpUserDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "createAdmin", null);
__decorate([
    common_1.Post('sign-in'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signIn", null);
__decorate([
    common_1.Post('sign-up'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.SignUpUserDto]),
    __metadata("design:returntype", Promise)
], UserAuthController.prototype, "signUp", null);
UserAuthController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserAuthService])
], UserAuthController);
exports.UserAuthController = UserAuthController;
//# sourceMappingURL=user.controller.js.map