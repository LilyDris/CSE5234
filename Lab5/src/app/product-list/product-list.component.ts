import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  amount = 1;
  products = products;
  product: Product | undefined;

  constructor(private cartService: CartService, private formBuilder: FormBuilder){
  }

  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product: Product, amount: Number) {
    this.cartService.addToCartAmount(product, amount);
    window.alert('Your product has been added to the cart!');
  }

  checkoutForm = this.formBuilder.group({
    product: '',
    amount: 1
  });
}
