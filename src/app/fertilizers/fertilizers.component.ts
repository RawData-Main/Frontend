import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-fertilizers',
  templateUrl: './fertilizers.component.html',
  styleUrls: ['./fertilizers.component.css']
})
export class FertilizersComponent implements OnInit {

  datas: any = [];
  plantsData: any = [];

  constructor(private is: ItemService, private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.is.getApi().subscribe((res: any) => {
      // console.log("plants",res[0]);
      this.datas = res;
      console.log("arr", this.datas);
      this.datas.filter((item: any) => {
        console.log("item", item.name);
        if (item.category == 4) {

          this.plantsData.push(item)
          console.log("plants", this.plantsData);
        }
      })
    })
  }

  addToCart(item: any) {
    this.cart.addToCart(item);
    // let xyz = this.cart.addToCart(item);
    // console.log("xyz",xyz);
  }

  view(item: any) {
    this.cart.getViewData(item);
    this.router.navigateByUrl("/view")
  }
}
