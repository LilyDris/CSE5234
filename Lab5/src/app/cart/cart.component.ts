import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
  items = this.cartService.getItems();
  total: number;

  constructor(
    private cartService: CartService
  ) { 
    this.total=0;
  }
  getTotal(){
    for(let item of this.items){
      this.total=this.total+item.price;
    }
    return this.total;
  }
}
