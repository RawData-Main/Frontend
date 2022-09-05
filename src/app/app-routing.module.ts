import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ViewComponent } from './Components/view/view.component';
import { CartComponent } from './Components/cart/cart.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { InvoiceComponent } from './Components/invoice/invoice.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:"category/:category",component:HomeComponent
  },
  {
    path:"item/:id",component:ViewComponent
  },
  {
    path:"search/:searchItem",component:HomeComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"payment",component:PaymentComponent
  },
  {
    path:"invoice",component:InvoiceComponent
  },
  {
    path:"report-user",loadChildren:()=>import('./report-user/report-user/report-user.module').then(m=>m.ReportUserModule)
  }

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
