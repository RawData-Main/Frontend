import { Items } from "./item";

export class CartItem{
    constructor(item:Items){
        this.item = item
    }
    item:Items;
    quantity:number = 1;
    get price(): number{
         return this.item.price * this.quantity;
    }
}