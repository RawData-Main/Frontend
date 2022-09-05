import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  name:any=""
  street1:any=""
  street2:any=""
  place1:any=""
  place2:any=""
  pincode:any=""
  email:any=""

  paymentid:any=""
  status:any=""
  date:any=""
  totalprice:any = ""

  constructor() { }

  

}
