import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { CardInfo } from '../shared/models/cardInfo.model';
import { OrderInfo } from '../shared/models/orderInfo.model';
import { ShippingInfo } from '../shared/models/shippingInfo.model';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent {

  public items = this.cartService.getItems();
  total: number;
  public paymentInfo = this.cartService.getPaymentInfo();
  public shippingInfo = this.cartService.getShippingInfo();
  REST_API: string = 'http://localhost:8081';
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {
    this.total = 0;
   }

  getTotal() {
    this.total = 0
    for (let item of this.items) {
      this.total += item.price
    }
    return this.total + 2.99;
  }
  createOrder(){
    const order= new OrderInfo(this.items,this.shippingInfo,this.paymentInfo);
    return order;
  }

  onSubmit(): void {
    const order= this.createOrder();
    window.alert('Your order has been submitted!');
    this.http
        .post(
          this.REST_API + '/order',
          order
        ).subscribe((res)=> {console.log(res)});


  }
   // Error handling
   handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
