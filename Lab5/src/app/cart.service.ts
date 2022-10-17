import { Product } from './products';
import { PaymentInfo } from './payment-info';
import { ShippingInfo } from './shipping-info';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { totalmem } from 'os';
import { Observable } from 'rxjs';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient){
  }
  items: Product[] = [];
  paymentInfo: PaymentInfo = {
    CardNumber: 2,
    CVV: 727,
    ExpiryMonth: 1,
    ExpiryYear: 2000
  }
  shippingInfo: ShippingInfo = {
    FullName: 'Test Name',
    StreetAddress: 'Test Address',
    City: 'Test City',
    State: 'Test State',
    ZipCode: 43210
  }
  addToCart(product: Product) {
    this.items.push(product);
  }
  
  total: number=0;
getTotal(){
  this.total = 0
  for(let item of this.items){
    this.total=this.total+item.price;
  }
  return this.total;
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
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  getPaymentInfo() {
    return this.paymentInfo
  }

  setPaymentInfo(paymentInfo : any) {
    this.paymentInfo.CardNumber = paymentInfo.cardNumber
    this.paymentInfo.CVV = paymentInfo.cvv
    this.paymentInfo.ExpiryMonth = paymentInfo.expiryMonth
    this.paymentInfo.ExpiryYear = paymentInfo.expiryYear
  }

  getShippingInfo() {
    return this.shippingInfo
  }

  setShippingInfo(shippingInfo: any) {
    this.shippingInfo.FullName = shippingInfo.name
    this.shippingInfo.StreetAddress = shippingInfo.street
    this.shippingInfo.City = shippingInfo.city
    this.shippingInfo.State = shippingInfo.state
    this.shippingInfo.ZipCode = shippingInfo.zip
  }

}