import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { totalmem } from 'os';
import { Observable } from 'rxjs';
import { CardInfo } from './shared/models/cardInfo.model';
import { ShippingInfo } from './shared/models/shippingInfo.model';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient){
  }
  items: Product[] = [];
  paymentInfo: CardInfo = {
    cardNumber: '2',
    cvv: 727,
    expiryMonth: 1,
    expiryYear: 2000
  }
  shippingInfo: ShippingInfo = {
    Name: 'Test Name',
    Street: 'Test ',
    City: 'Test City',
    State: 'Test State',
    Zip: 43210
  }

  confirmationNumber!: String;

  setConfirmation(num: String){
    this.confirmationNumber=num;
  }

  getConfirmation(){
    return this.confirmationNumber;
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
    this.paymentInfo.cardNumber = paymentInfo.cardNumber
    this.paymentInfo.cvv = paymentInfo.cvv
    this.paymentInfo.expiryMonth = paymentInfo.expiryMonth
    this.paymentInfo.expiryYear = paymentInfo.expiryYear
  }

  getShippingInfo(): ShippingInfo {
    return this.shippingInfo;
  }

  setShippingInfo(shippingInfo: any) {
    this.shippingInfo.Name = shippingInfo.name
    this.shippingInfo.Street = shippingInfo.street
    this.shippingInfo.City = shippingInfo.city
    this.shippingInfo.State = shippingInfo.state
    this.shippingInfo.Zip = shippingInfo.zip
  }

}