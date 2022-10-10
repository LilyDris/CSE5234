import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-contact',
  templateUrl: './feedback-contact.component.html',
  styleUrls: ['./feedback-contact.component.css']
})
export class FeedbackContactComponent implements OnInit {
  title = 'Feedback Contact Page'

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  
  ngOnInit(): void {
  }

  feedbackContactForm = this.formBuilder.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    comments: ['']
  });
  
  onSubmit(): void{
    console.log("Submitted")
    this.router.navigate(['/contact']);
  }
}
