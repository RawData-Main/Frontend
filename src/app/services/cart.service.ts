import { Injectable } from '@angular/core';
import { Cart } from '../Models/cart';
import { CartItem } from '../Models/cartItem';
import { Items } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(item:Items) :void{
    let cartItem = this.cart.items.find(itm => itm.item.id === item.id)
    if(cartItem){
    this.changeQuantity(item.id,cartItem.quantity + 1)
    return;
    }
    this.cart.items.push(new CartItem(item));
  }

  removeFromCart(itemId:number):void{
    this.cart.items = this.cart.items.filter(itm => itm.item.id != itemId)
  }

  changeQuantity(quantity:number,itemId:number){
    let cartItem = this.cart.items.find(itm => itm.item.id === itemId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
