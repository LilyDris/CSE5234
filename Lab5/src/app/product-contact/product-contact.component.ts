import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-contact',
  templateUrl: './product-contact.component.html',
  styleUrls: ['./product-contact.component.css']
})
export class ProductContactComponent implements OnInit {
  
  title = 'Product Contact Page'

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  
  ngOnInit(): void {
  }

  productContactForm = this.formBuilder.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    product: [''],
    orderNumber: [''],
    comments: ['']
  });
  
  onSubmit(): void{
    console.log("Submitted")
    this.router.navigate(['/contact']);
  }
  
  productList:product[] = [
    new product("1", "Phone XL"),
    new product("2", "Phone Mini"),
    new product("3", "Phone Standard"),
    new product("4", "Phone Pro Max"),
    new product("5", "Headphone"),

  ];
}

export class product {
  id: string;
  name: string;

  constructor(id:string, name:string){
    this.id = id;
    this.name = name;
  }
}

