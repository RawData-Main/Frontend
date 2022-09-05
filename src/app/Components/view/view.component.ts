import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxImgZoomService } from 'ngx-img-zoom';
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
  constructor(private ngxImgZoom: NgxImgZoomService,private route:ActivatedRoute,private is:ItemService,private cs:CartService,private router:Router) {
    route.params.subscribe((params)=>{
      if(params['id'])
      this.item = is.getItemById(params['id'])
    })
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }
    ]);
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

  preview(files:any) {
    if (files.length === 0) return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      //this.imgURL = reader.result;
      this.previewImageSrc = reader.result;
      this.zoomImageSrc = reader.result;
    };
  }

}
