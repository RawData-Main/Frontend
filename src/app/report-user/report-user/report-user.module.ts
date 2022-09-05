import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportUserRoutingModule } from './report-user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    ProductsComponent,
    UsersComponent,
    CategoryComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ReportUserRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReportUserModule { }
