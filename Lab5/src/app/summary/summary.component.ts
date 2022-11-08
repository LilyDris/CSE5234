import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertyRead } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, first, Observable, retry, take, tap, throwError } from 'rxjs';
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
  result="";
  success="/";
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
    private http: HttpClient,
    private router: Router
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

  onSubmit(order:{items:Product[], total:Number, shippingInfo: ShippingInfo, paymentInfo: CardInfo}): void {
    order.total=this.getTotal();
  
    this.http
        .post(
          this.REST_API + '/order',
          order
        ).subscribe((res) => {
          this.result=res.toString()
          console.log(this.result);
          if(this.result=="success"){
            window.alert('Your order has been submitted!');
            this.cartService.clearCart();
            this.router.navigate(['/confirmation']);
          }
          else{
            window.alert('We dont have enough stock! Oops');
            this.router.navigate(['/']);
          }
        });

    
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
