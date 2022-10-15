import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ProductCrudService } from '../service/product-crud.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  amount:number[] = [];
  product: Product | undefined;
  products: Product[] = [];

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private productCrudService: ProductCrudService){
  }

  ngOnInit(): void {
    this.productCrudService.GetProducts().subscribe(res => {
      this.products =res;
    }); 
    for (let p of this.products) {
      this.amount[p.id] = 0; 
    }
  }

  share() {
    window.alert('The product has been shared!');
  }

  addToCart(product: Product, amount: Number) {
    this.cartService.addToCartAmount(product, amount);
    window.alert('Your product has been added to the cart!');
    for (let p of this.products) {
      this.amount[p.id] = 0; 
    }
  }

  checkoutForm = this.formBuilder.group({
    product: '',
    amount: 1
  });

  
}
