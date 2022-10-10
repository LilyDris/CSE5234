import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-contact',
  templateUrl: './payment-contact.component.html',
  styleUrls: ['./payment-contact.component.css']
})
export class PaymentContactComponent implements OnInit {
  title = 'Payment Contact Page'

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  
  ngOnInit(): void {
  }

  paymentContactForm = this.formBuilder.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    orderNumber: [''],
    comments: ['']
  });
  
  onSubmit(): void{
    console.log("Submitted")
    this.router.navigate(['/contact']);
  }
}
