import { Component, OnInit } from '@angular/core';

import { ProductContactComponent } from '../product-contact/product-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  product: boolean = false;
  shipping: boolean = false;
  payment: boolean = false;
  feedback: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  productTab(): void{
    this.product=true;
    this.shipping=false;
    this.payment=false;
    this.feedback=false;
  }
  shippingTab(): void{
    this.product=false;
    this.shipping=true;
    this.payment=false;
    this.feedback=false;
  }
  paymentTab(): void{
    this.product=false;
    this.shipping=false;
    this.payment=true;
    this.feedback=false;
  }
  feedbackTab(): void{
    this.product=false;
    this.shipping=false;
    this.payment=false;
    this.feedback=true;
  }
}
