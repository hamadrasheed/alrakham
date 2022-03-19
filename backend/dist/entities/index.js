"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const _1 = require(".");
__exportStar(require("./shipping.entity"), exports);
__exportStar(require("./user.entity"), exports);
__exportStar(require("./order.entity"), exports);
__exportStar(require("./product.entity"), exports);
__exportStar(require("./product_reviews.entity"), exports);
exports.models = [
    _1.product_reviews,
    _1.shipping_details,
    _1.order_detail,
    _1.users,
    _1.products,
];
//# sourceMappingURL=index.js.map