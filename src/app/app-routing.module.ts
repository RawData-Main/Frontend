import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"",component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
