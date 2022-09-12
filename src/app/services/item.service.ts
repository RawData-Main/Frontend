import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/categories';
import { Items } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public viewData: any;
  singlePrice:any;

  invoiceData:any;

  constructor(private http : HttpClient) { }

  // getItemById(id:number):Items{
  //   return this.getAll().find(item => item.id == id)!;
  // }

  // getAllItemByCategory(category: string): Items[] {
  //   return category == 'all' ? this.getAll() : this.getAll().filter(item => item.category?.includes(category))
  // }

  // getAllCategory(): Category[] {
  //   return [
  //     // {name:'all',image:''},
  //     { name: 'Seeds', image: '../../../assets/seeds.jpg' },
  //     { name: 'Plants', image: '../../../assets/plants.jpg' },
  //     { name: 'Fertilizer', image: '../../../assets/fertilizer.webp' },
  //     { name: 'Tools', image: '../../../assets/tools.jpg' }
  //   ]
  // }

  getApi():any{
    return this.http.get<any>("http://empty-sites-show-202-164-133-86.loca.lt/product/product/");
  }

  getItemByCategory(category:string):any{
    return category == 'all' ? this.getApi() : this.getApi().filter((item:any) => item.category?.includes(category))
  }

  getcategory(){
    return this.http.get<any>("http://empty-sites-show-202-164-133-86.loca.lt/product/category/");
  }



  


  // getDatabyId(id:any){
  //   this.getApi().forEach((data:any)=>{
  //     if(data.id == id){
  //       console.log(data);
  //       this.viewData = data;
  //       return this.viewData;
  //     }
  //   })
  // }

  // getAll(): Items[] {
  //   return [
  //     {
  //       id: 1,
  //       name: 'avocado',
  //       price: 99,
  //       image: '/assets/plants.jpg',
  //       category: ['Plants'],
  //       rating:4.5,
  //       description:'jkhnfvjnsdfjnbefjknajksbj jdfbjdfb ufugfhufh uifhuwhfanfn uifhuwef uwefhu fuiwgfuygfuanfjbna fuug'
  //     },
  //     {
  //       id: 2,
  //       name: 'pumpkin seed',
  //       price: 29,
  //       image: '/assets/seeds.jpg',
  //       category: ['Seeds'],
  //       rating:4.1,
  //       description:'jkhnfvjnsdfjnbefjknajksbj jdfbjdfb ufugfhufh uifhuwhfanfn uifhuwef uwefhu fuiwgfuygfuanfjbna fuug'
  //     },
  //     {
  //       id: 3,
  //       name: 'organic fertilizer',
  //       price: 109,
  //       image: '/assets/fertilizer.webp',
  //       category: ['Fertilizer'],
  //       rating:3.5,
  //       description:'jkhnfvjnsdfjnbefjknajksbj jdfbjdfb ufugfhufh uifhuwhfanfn uifhuwef uwefhu fuiwgfuygfuanfjbna fuug'
  //     },
  //     {
  //       id: 4,
  //       name: 'plants pot',
  //       price: 39,
  //       image: '/assets/tools.jpg',
  //       category: ['Tools'],
  //       rating:4.9,
  //       description:'jkhnfvjnsdfjnbefjknajksbj jdfbjdfb ufugfhufh uifhuwhfanfn uifhuwef uwefhu fuiwgfuygfuanfjbna fuug'
  //     }
  //   ]
  // }

  
}
