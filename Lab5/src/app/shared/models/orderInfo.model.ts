import { Product } from "src/app/products";
import { CardInfo } from "./cardInfo.model";
import { ShippingInfo } from "./shippingInfo.model";

export class OrderInfo{
    cart: Product[];
    shipping: ShippingInfo;
    payment: CardInfo;

    constructor(cart: Product[], shipping: ShippingInfo, payment: CardInfo){
        this.cart=cart;
        this.shipping=shipping;
        this.payment=payment;
    }
}