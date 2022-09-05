import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Models/cart';
import { CartItem } from 'src/app/Models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart!:Cart;
  constructor(private cartService:CartService) {
    this.setCart();
   }

  ngOnInit(): void {
    console.log("total",this.cart.totalPrice);
    
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.item.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.item.id,quantity);
    this.setCart();
  }


}