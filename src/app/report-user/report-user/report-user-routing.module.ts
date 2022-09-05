import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"products",component:ProductsComponent
  },
  {
    path:"users",component:UsersComponent
  },
  {
    path:"category",component:CategoryComponent
  },
  {
    path:"orders",component:OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportUserRoutingModule { }
