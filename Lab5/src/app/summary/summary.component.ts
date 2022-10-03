import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})

export class SummaryComponent {

  items = this.cartService.getItems();
  total: number;
  paymentInfo = this.cartService.getPaymentInfo();
  
  constructor(
    private cartService: CartService
  ) {
    this.total = 0;
   }

  getTotal() {
    for (let item of this.items) {
      this.total += item.price
    }
    return this.total;
  }

  onSubmit(): void {
    //Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted!')
  }

}
