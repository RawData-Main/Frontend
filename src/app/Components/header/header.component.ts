import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItemNumber:number = 0;
  user="Login"
  isLogin = false;

  constructor(private cs:CartService,private router:Router) { }

  ngOnInit(): void {
    this.cs.getProductData().subscribe(res => {
      this.totalItemNumber = res.length;

      if(localStorage.getItem("CurrentUname")){
        this.user = "Hi "+(localStorage.getItem("CurrentUname") || "") 
        console.log("user:",localStorage.getItem("CurrentUser"));
        this.isLogin  = true;
        
      }      
    })
  }

  logout(){
    localStorage.removeItem("CurrentUname")
    alert("logout Success")
    this.router.navigateByUrl("/login")
  }

  cart(){
    if(localStorage.getItem("CurrentUname")){
      this.router.navigateByUrl("/cart")
    }
    else{
      alert("please login...!")
      this.router.navigateByUrl("/login")
    }
  }

}
