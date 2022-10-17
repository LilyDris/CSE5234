import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent {

  items = this.cartService.getItems();
  total: number;
  paymentInfo = this.cartService.getPaymentInfo();
  shippingInfo = this.cartService.getShippingInfo();
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

  onSubmit(items: Product[]): Observable<any> {
    window.alert('Your order has been submitted!');
      return this.http
        .post(
          this.REST_API + '/order',
          JSON.stringify(items),
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));


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
