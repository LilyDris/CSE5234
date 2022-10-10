import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProductContactComponent } from './product-contact/product-contact.component';
import { ShippingContactComponent } from './shipping-contact/shipping-contact.component';
import { PaymentContactComponent } from './payment-contact/payment-contact.component';
import { FeedbackContactComponent } from './feedback-contact/feedback-contact.component';

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
    MatTabsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent},
      { path: 'payment', component: PaymentComponent},
      { path: 'summary', component: SummaryComponent},
      { path: 'confirmation', component: ConfirmationComponent},
      { path: 'about-us', component: AboutUsComponent},
      { path: 'contact', component: ContactComponent},
      { path: '', component: HomePageComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    PaymentComponent,
    SummaryComponent,
    ConfirmationComponent,
    HomePageComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    ProductContactComponent,
    ShippingContactComponent,
    PaymentContactComponent,
    FeedbackContactComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


  