import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/Models/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Items[] = [];
  datas:any = [];
  constructor(private is:ItemService,private route:ActivatedRoute,private cart:CartService) { }

  ngOnInit(): void {


    // this.route.params.subscribe(params => {
    //   if(params['searchItem'])
    //   this.items = this.is.getAll().filter(item => item.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   else if(params['category'])
    //   this.items = this.is.getAllItemByCategory(params['category'])
    //   else
    //   this.items = this.is.getAll();
    // })

    // this.route.params.subscribe(params => {
    //   if(params['searchItem'])
    //   this.datas = this.is.getApi().filter((item:any) => item.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   else if(params['category'])
    //   this.datas = this.is.getItemByCategory(params['category'])
    //   else
    //   this.datas = this.is.getApi().subscribe((res:any)=>{
    //     console.log(res);
    //     this.datas = res;
        
    //   })
    // })
    

    this.is.getApi().subscribe((res:any)=>{
      console.log(res);
      this.datas = res;
      
    })
  }

  
  addToCart(item:any){
      this.cart.addToCart(item);
  }

}
