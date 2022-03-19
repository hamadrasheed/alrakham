"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jwt = require("jsonwebtoken");
function authenticate(req, res, next) {
    try {
        const { headers: { authorization } } = req;
        const token = authorization.split(' ')[1];
        const { employee_id } = jwt.verify(token, process.env.PRIVATE_KEY);
        req.body = Object.assign(Object.assign({}, req.body), { user_id: employee_id });
        req.query = Object.assign(Object.assign({}, req.query), { user_id: employee_id });
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
}
exports.authenticate = authenticate;
//# sourceMappingURL=auth-middleware.js.map