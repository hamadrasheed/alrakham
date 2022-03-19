interface OrderItemI {
    id: number;
    image_url: string;
    name: string;
    brand: string;
    price: string;
    category: string;
    count_in_stock: number;
    description: string;
    qty: number;
}
interface ShippingDetailsI {
    address: string;
    city: string;
    postal_code: number;
    country: string;
}
export declare class CreateOrderDto {
    order_items: OrderItemI[];
    shipping_details: ShippingDetailsI;
    payment_method: string;
    items_price: number;
    shipping_price: number;
    tax_price: number;
    total_price: number;
    user_id: number;
}
export {};
