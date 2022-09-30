import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  total= this.cartService.total;
  shippingTypes = this.fb.group({Overnight:false, TwoDay: false, Postal:false})

  constructor(private cartService: CartService, private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }

  getTotal(type: string): void{
    
  }

}
