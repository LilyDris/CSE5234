import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      {path: 'shipping', component: ShippingComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


  