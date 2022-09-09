import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/categories';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  itemPageCategories?:string[];
  categories:any = [];

  constructor(private is:ItemService) { }

  ngOnInit(): void {
    if(!this.itemPageCategories)
    this.categories = this.is.getcategory();
    console.log("items",this.categories);

    this.is.getcategory().subscribe(res=>{
      this.categories = res;
      console.log(this.categories);
      
    })
    
  }



}
