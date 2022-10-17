import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ProductCrudService } from '../service/product-crud.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productCrudService: ProductCrudService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.productCrudService.GetProduct(productIdFromRoute).subscribe(res => {
    this.product = res;
  }); 

  // Find the product that correspond with the id provided in route.
  // this.product = products.find(product => product.id === productIdFromRoute);
  }
}

