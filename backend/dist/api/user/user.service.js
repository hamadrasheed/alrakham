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
exports.UserAuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const models = require("../../entities");
const shared_1 = require("../../shared");
const utils_1 = require("../../utils");
let UserAuthService = class UserAuthService extends shared_1.Helper {
    constructor(userRepo) {
        super();
        this.userRepo = userRepo;
        this.update = async (data) => {
            const { id, user_id: userId, name, phone_number, email, password, } = data;
            await this.userRepo.update({
                updated_at: new Date(),
                updated_by: userId,
                name,
                password,
                phone_number,
                email
            }, {
                where: { id },
                individualHooks: true
            });
            return "User SuccessFully Updated!";
        };
        this.signIn = async (data) => {
            const { email, password, } = data;
            const signInUser = this.shallowCopy(await this.userRepo.findOne({
                where: {
                    deleted_at: null,
                    email,
                },
            }));
            if (!signInUser || !Object.keys(signInUser).length) {
                throw utils_1.generateMessages('AUTH_FAILED');
            }
            const { password: userPassword } = signInUser;
            const bcryptedPassword = await bcrypt.compare(password, userPassword);
            if (!bcryptedPassword) {
                throw utils_1.generateMessages('AUTH_FAILED');
            }
            const userToken = jwt.sign({
                email: signInUser.email,
                employee_id: signInUser.id,
                name: signInUser.name,
            }, process.env.PRIVATE_KEY, {
                expiresIn: '24h',
            });
            delete signInUser.password;
            const response = Object.assign(Object.assign({}, signInUser), { token: userToken });
            return Object.assign({}, response);
        };
        this.signUp = async (data, isSuperAdmin) => {
            const { name, email, password, phone_number: phoneNumber } = data;
            const bcryptPassword = await bcrypt.hash(password, 1);
            if (!bcryptPassword || !bcryptPassword.length) {
                throw utils_1.generateMessages('AUTH_FAILED');
            }
            const createUserObject = {
                email,
                name,
                password: bcryptPassword,
                phone_number: phoneNumber
            };
            if (isSuperAdmin) {
                createUserObject.is_admin = true;
            }
            await this.userRepo.create(Object.assign({}, createUserObject));
            return 'User Created Successfulluy!';
        };
    }
};
UserAuthService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(models.users)),
    __metadata("design:paramtypes", [Object])
], UserAuthService);
exports.UserAuthService = UserAuthService;
//# sourceMappingURL=user.service.js.map