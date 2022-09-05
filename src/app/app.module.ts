import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { RegisterComponent } from './Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Components/category/category.component';
import { SearchComponent } from './Components/search/search.component';
import { ViewComponent } from './Components/view/view.component';
import { CartComponent } from './Components/cart/cart.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RatingModule } from 'ng-starrating';
import { PaymentComponent } from './Components/payment/payment.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';
import { NgxPrintModule } from 'ngx-print';
import {HttpClientModule} from '@angular/common/http';
import { NgxImgZoomModule } from 'ngx-img-zoom';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    RegisterComponent,
    RegisterComponent,
    CategoryComponent,
    SearchComponent,
    ViewComponent,
    CartComponent,
    NotFoundComponent,
    PaymentComponent,
    InvoiceComponent,
    AboutUsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    NgxPrintModule,
    HttpClientModule,
    NgxImgZoomModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
