import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { PaymentService } from '../services/payment.service';
import { render } from 'creditcardpayments/creditCardPayments'
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-payment2',
  templateUrl: './payment2.component.html',
  styleUrls: ['./payment2.component.css']
})
export class Payment2Component implements OnInit {

  userDetails:any;

  constructor(private router:Router,private is:ItemService,private cs:CartService,private payment:PaymentService) { }

  ngOnInit(): void {
    console.log("tp",this.cs.totalPrice);
    
    render(
      {
        id:"#myPaypalButtons",
        currency:"USD",
        value:`${this.is.singlePrice}`,
        onApprove:(details) => {
          // alert("Transaction Successfull")
          this.userDetails=details;
          this.router.navigateByUrl("/invoice")
         console.log("details",details);
         console.log("name",details.payer.name);
         this.payment.name = details.purchase_units[0].shipping.name.full_name;
         this.payment.street1 = details.purchase_units[0].shipping.address.address_line_1;
         this.payment.street2 = details.purchase_units[0].shipping.address.address_line_2;
         this.payment.place1 = details.purchase_units[0].shipping.address.admin_area_1;
         this.payment.place2 = details.purchase_units[0].shipping.address.admin_area_2;
         this.payment.pincode = details.purchase_units[0].shipping.address.postal_code;
         this.payment.email = details.payer.email_address;

         this.payment.totalprice = details.purchase_units[0].payments.captures[0].amount.value;
         this.payment.paymentid = details.purchase_units[0].payments.captures[0].id;
         this.payment.status = details.status;
         this.payment.date = details.create_time;
         console.log("total",this.payment.paymentid);
         
         console.log("purchase",this.payment.street1);
         
        }
      }
    )

  }

}
