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
  categories?:Category[] = [];

  constructor(private is:ItemService) { }

  ngOnInit(): void {
    // if(!this.itemPageCategories)
    // this.categories = this.is.getAllCategory();
    // console.log("items",this.categories);
    
  }



}
