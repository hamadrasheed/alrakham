"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMessages = void 0;
const dotenv = require("dotenv");
const codes_1 = require("../config/codes");
dotenv.config({ path: '.env' });
const generateMessages = (code, validator, type) => {
    const codes = JSON.parse(JSON.stringify(codes_1.responses));
    if (validator) {
        return codes[`${process.env.NODE_ENV}`][`${process.env.ENV_LANG}`].validator[`${type}`][`${code}`];
    }
    return codes[`${process.env.NODE_ENV}`][`${process.env.ENV_LANG}`][`${code}`];
};
exports.generateMessages = generateMessages;
//# sourceMappingURL=generate-message.js.map