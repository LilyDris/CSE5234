import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { CardInfo } from '../shared/models/cardInfo.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    console.log("in the payment page")
  }

  cardInfo = new CardInfo('', 123, 2026, 14);

  paymentForm = this.formBuilder.group({
    cardNumber: this.cardInfo.cardNumber,
    cvv: this.cardInfo.cvv,
    expiryMonth: this.cardInfo.expiryMonth,
    expiryYear: this.cardInfo.expiryYear
  });

  onSubmit(): void {
      this.router.navigate(['/summary']);
  }
  
}
