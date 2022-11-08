import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  confirmation!: String;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.confirmation = this.cartService.getConfirmation();
  }

}
