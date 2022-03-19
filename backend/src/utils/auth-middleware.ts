import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export function authenticate(req: Request, res: Response, next: NextFunction) {

    try {

        const { headers: { authorization } } = req;
        const token = authorization.split(' ')[1];
        const { employee_id }: any = jwt.verify(token, process.env.PRIVATE_KEY);

        req.body = {
            ...req.body,
            user_id: employee_id
        };

        req.query = {
            ...req.query,
            user_id: employee_id
        };
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed',
        });
    }
}