import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-contact',
  templateUrl: './shipping-contact.component.html',
  styleUrls: ['./shipping-contact.component.css']
})
export class ShippingContactComponent implements OnInit {
  title = 'Shipping Contact Page'

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  
  ngOnInit(): void {
  }

  shippingContactForm = this.formBuilder.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    orderNumber: [''],
    comments: ['']
  });
  
  onSubmit(): void{
    console.log("Submitted")
    this.router.navigate(['/contact']);
  }
}
