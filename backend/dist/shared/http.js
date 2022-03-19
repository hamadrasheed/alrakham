"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = require("axios");
class Http {
    constructor() {
        this.get = async (url, headers) => {
            var _a, _b;
            try {
                const response = await axios_1.default.get(url, headers);
                return response === null || response === void 0 ? void 0 : response.data;
            }
            catch (error) {
                throw Object.assign(Object.assign({}, (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data), { status: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status });
            }
        };
        this.post = async (url, data, headers) => {
            var _a, _b;
            try {
                const response = await axios_1.default.post(url, data, headers);
                return response.data;
            }
            catch (error) {
                throw Object.assign(Object.assign({}, (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data), { status: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status });
            }
        };
        this.put = async (url, data, headers) => {
            var _a, _b;
            try {
                const response = await axios_1.default.put(url, data, headers);
                return response.data;
            }
            catch (error) {
                throw Object.assign(Object.assign({}, (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data), { status: (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.status });
            }
        };
    }
}
exports.Http = Http;
//# sourceMappingURL=http.js.map