import { ANY } from '../shared/common';

import {
    products,
    users,
    order_detail,
    shipping_details,
    product_reviews,
} from '.';

export * from './shipping.entity';
export * from './user.entity';
export * from './order.entity';
export * from './product.entity';
export * from './product_reviews.entity';

export const models: ANY = [
    product_reviews,
    shipping_details,
    order_detail,
    users,
    products,
];
