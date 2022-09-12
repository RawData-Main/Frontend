import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';
import { PaymentService } from 'src/app/services/payment.service';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  name:any;
  street1:any;
  street2:any;
  place1:any;
  place2:any;
  pincode:any;
  email:any;

  status:any;
  paymentid:any;
  date:any;
  totalprice:any;

  cartItems!:Cart;

  today = new Date()
   deliverydate = new Date()
   productDetailscart:any = []
   productDetailsview:any = []


  constructor(private payment:PaymentService,private cart:CartService,private is:ItemService) { }

  ngOnInit(): void {
    console.log("uname",this.payment.name);
    this.name = this.payment.name
    this.street1 = this.payment.street1
    this.street2 = this.payment.street2
    this.place1 = this.payment.place1
    this.place2 = this.payment.place2
    this.pincode = this.payment.pincode
    this.email = this.payment.email

    this.status = this.payment.status
    this.paymentid = this.payment.paymentid
    this.date = this.payment.date
    this.totalprice = this.payment.totalprice

    this.deliverydate.setDate(this.today.getDate() + 7)

    this.productDetailscart = this.is.invoiceData 
    // console.log("invv",this.productDetails);
    this.productDetailsview = this.cart.cartList;
    // console.log("invc",this.productDetails);
  }

  // setCart(){
  //   this.cartItems = this.cart.getCart();
  // }

}
