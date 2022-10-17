import { Product } from './products';
import { CardInfo } from './shared/models/cardInfo.model';
import { ShippingInfo } from './shared/models/shippingInfo.model';
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
  REST_API: string = 'http://localhost:8081';
  items: Product[] = [];
  paymentInfo: CardInfo = {
    cardNumber: '111',
    cvv: 727,
    expiryMonth: 1,
    expiryYear: 2000
  }
  shippingInfo: ShippingInfo = {
    Name: 'Test Name',
    Street: 'Test Address',
    City: 'Test City',
    State: 'Test State',
    Zip: 43210
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
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  getPaymentInfo() {
    return this.paymentInfo
  }

  setPaymentInfo(paymentInfo : any) {
    this.paymentInfo.cardNumber = paymentInfo.cardNumber
    this.paymentInfo.cvv = paymentInfo.cvv
    this.paymentInfo.expiryMonth = paymentInfo.expiryMonth
    this.paymentInfo.expiryYear = paymentInfo.expiryYear
  }

  getShippingInfo() {
    return this.shippingInfo
  }

  setShippingInfo(shippingInfo: any) {
    this.shippingInfo.Name = shippingInfo.name
    this.shippingInfo.Street = shippingInfo.street
    this.shippingInfo.City = shippingInfo.city
    this.shippingInfo.State = shippingInfo.state
    this.shippingInfo.Zip = shippingInfo.zip
  }
}