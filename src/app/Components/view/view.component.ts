import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/Models/item';
import { CartService } from 'src/app/services/cart.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  title = "CodeSandbox";
 
  public imagePath:any;
  imgURL: any;
  public message: string | undefined;
 
  enableZoom: Boolean = true;
  previewImageSrc: any;
  zoomImageSrc: any;

  item!:Items;
  constructor(private route:ActivatedRoute,private is:ItemService,private cs:CartService,private router:Router) {
    route.params.subscribe((params)=>{
      if(params['id'])
      this.item = is.getItemById(params['id'])
    })
   }

  ngOnInit(): void {
  }

  // addToCart(){
  //   this.cartService.addToCart(this.food)
  //   this.router.navigateByUrl('/cart-page')
  // }

  addToCart(){
  this.cs.addToCart(this.item)
  this.router.navigateByUrl('/cart')
  }



}
