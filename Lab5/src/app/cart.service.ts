import { Product } from './products';
import { PaymentInfo } from './payment-info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { totalmem } from 'os';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient){
  }
  items: Product[] = [];
  paymentInfo: PaymentInfo = {
    CardNumber: 2,
    CVV: 727,
    ExpiryMonth: 1,
    ExpiryYear: 2000
  }

/* . . . */
  addToCart(product: Product) {
    this.items.push(product);
  }

  addToCartAmount(product: Product, amount: Number){
    for(let i=0; i<amount ;i++) {
    this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  getPaymentInfo() {
    return this.paymentInfo
  }
}