import { Product } from "src/app/products";
import { CardInfo } from "./cardInfo.model";
import { ShippingInfo } from "./shippingInfo.model";

export class OrderInfo {
    items: Product[];
    shipping: ShippingInfo;
    payment: CardInfo;
    
    constructor(items: Product[], shipping: ShippingInfo, payment: CardInfo){
        this.items=items;
        this.payment= payment;
        this.shipping= shipping;
    }
    
}