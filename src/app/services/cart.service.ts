import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from '../Models/cart';
import { CartItem } from '../Models/cartItem';
import { Items } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartDataList:any = [];
  productList = new BehaviorSubject<any>([]);

  constructor (private http:HttpClient) {}

  // get product data
  getProductData(){
    return this.productList.asObservable();
  }

  //set product Data
  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

  // add  to  cart detils
  addToCart(product:any){
    this.cartDataList.push(product);
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log("item",this.cartDataList);
    
  }

  //get Total amount

  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total
    })
  }

  // remove cart data one by one
  removeCartData(product:any){
    this.cartDataList.map((a:any,index:any)=>{
      if(product.id == a.id){
        this.cartDataList.splice(index,1)
      }
    })
  }

  //remove all cart data
  removeAllCart(){
    this.cartDataList = [];
    this.productList.next(this.cartDataList)
  }






  // private cart:Cart = new Cart();

  // addToCart(item:Items) :void{
  //   let cartItem = this.cart.items.find(itm => itm.item.id === item.id)
  //   if(cartItem){
  //   this.changeQuantity(item.id,cartItem.quantity + 1)
  //   return;
  //   }
  //   this.cart.items.push(new CartItem(item));
  // }

  // removeFromCart(itemId:number):void{
  //   this.cart.items = this.cart.items.filter(itm => itm.item.id != itemId)
  // }

  // changeQuantity(quantity:number,itemId:number){
  //   let cartItem = this.cart.items.find(itm => itm.item.id === itemId);
  //   if(!cartItem) return;
  //   cartItem.quantity = quantity;
  // }

  // getCart():Cart{
  //   return this.cart;
  // }


}
