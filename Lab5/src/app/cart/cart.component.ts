import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  
  items = this.cartService.getItems();
  total= this.cartService.getTotal();

  constructor(
    private cartService: CartService,
    private httpClient: HttpClient
  ) { }

}
