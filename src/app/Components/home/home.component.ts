import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Items } from 'src/app/Models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:Items[] = [];
  datas:any = [];
  constructor(private is:ItemService,private route:ActivatedRoute) { }

  ngOnInit(): void {


    // this.route.params.subscribe(params => {
    //   if(params['searchItem'])
    //   this.items = this.is.getAll().filter(item => item.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
    //   else if(params['category'])
    //   this.items = this.is.getAllItemByCategory(params['category'])
    //   else
    //   this.items = this.is.getAll();
    // })

    

    this.is.getApi().subscribe((res)=>{
      console.log(res);
      this.datas = res;
      
    })

  }

}
