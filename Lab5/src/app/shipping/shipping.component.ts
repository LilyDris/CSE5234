import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';
import { FormBuilder, FormControl, Validator, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ShippingInfo } from '../shared/models/shippingInfo.model';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

    shipInfo = new ShippingInfo("","","","",1111111);
shippingForm = this.formBuilder.group({
  name: this.shipInfo.Name,
  street: this.shipInfo.Street,
  city: this.shipInfo.City,
  state: this.shipInfo.State,
  zip: this.shipInfo.Zip

});


onSubmit(): void {
    this.cartService.setShippingInfo(this.shippingForm.value)
    this.router.navigate(['/payment']);
}
getTotal(): number {
  return this.total +2.99
}

  shippingCosts!: Observable<{ type: string, price: number }[]>;
  total= this.cartService.total;


  constructor(private cartService: CartService, private formBuilder: FormBuilder, private router: Router) { 

  }

  ngOnInit(): void {
    this.shippingCosts =  this.cartService.getShippingPrices();
  }



}
