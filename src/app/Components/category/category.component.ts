import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/categories';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  itemPageCategories?: string[];
  categories: any = [];
  datas: any = [];
  keepGoing = true;

  constructor(private is: ItemService, private router: Router) { }

  ngOnInit(): void {
    if (!this.itemPageCategories)
      this.categories = this.is.getcategory();
    console.log("items", this.categories);

    this.is.getcategory().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    })


    this.is.getApi().subscribe((res: any) => {
      console.log(res);
      this.datas = res;
    })

  }

  // category() {
  //   this.categories.find((item: any) => {
  //     console.log("qwe", item);
  //     if (this.keepGoing) {
  //       if (item.category_name == "plants") {
  //         alert("category 1")
  //         this.keepGoing = false
  //         // this.router.navigateByUrl("login")
  //         console.log("CATEGRY", item.category_name);
  //       }
  //       else if (item.category_name == "seeds") {
  //         alert("category 2")
  //         this.keepGoing = false

  //         // this.router.navigateByUrl("register")
  //       }
  //       else if (item.category_name == "Tools") {
  //         alert("category 3")
  //         this.keepGoing = false

  //         // this.router.navigateByUrl("cart")
  //       }
  //       else if (item.category_name == "Fertilizers") {
  //         alert("category 4")
  //         this.keepGoing = false

  //         // this.router.navigateByUrl("payment")
  //       }
  //     }
  //   })
  // }

  category(data:any) {
    console.log("abc",data)
    // this.categories.forEach((item: any) => {
      // console.log("qwe", item);
      if (data.category_name == "plants") {
        this.router.navigateByUrl("/plants")
        // alert("category 1")
        // console.log("CATEGRY", data.category_name);
      }
      else if (data.category_name == "seeds") {
        this.router.navigateByUrl("/seeds")
        // alert("category 2")
      }
      else if (data.category_name == "Tools") {
        this.router.navigateByUrl("/tools")
        // alert("category 3")

      }
      else if (data.category_name == "Fertilizers") {
        this.router.navigateByUrl("/fertilizers")
        // alert("category 4")

      }
    // }
    // )
  }


}
