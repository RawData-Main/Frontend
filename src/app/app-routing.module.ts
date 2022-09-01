import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AboutUsComponent } from './Components/about-us/about-us.component';
=======
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
>>>>>>> d4076a7910a2508423de96a378c997771e7a0b69
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'about-us',component:AboutUsComponent}
];
=======
  {
    path:"",component:HomeComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {
    path:"login",component:LoginComponent
  },
   {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent}

>>>>>>> d4076a7910a2508423de96a378c997771e7a0b69

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
