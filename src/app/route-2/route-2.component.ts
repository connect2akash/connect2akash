import { Component, OnInit } from '@angular/core';
import { Items, ItemsMockdata } from './../items';

@Component({
  selector: 'app-route-2',
  templateUrl: './route-2.component.html',
  styleUrls: ['./route-2.component.css']
})
export class Route2Component implements OnInit {

  public selectedType = 1;
  public itemsMockdata: Items[] = ItemsMockdata;
  public temp : Items[] = this.itemsMockdata;

  constructor() { }

  ngOnInit() {
      
  }

  public onClick(type: number): void {
    this.selectedType = type;
  }

  public onChange(value: string): void {
    if (value === "1") {
      // smaller than 30
      this.itemsMockdata = this.temp.filter((item) => {
        return item.price < 30
      })
    } else if (value === "2") {
      // greator than 30 smaller than 50
      this.itemsMockdata = this.temp.filter((item) => {
        return (item.price >= 30 && item.price < 50)
      }) 
    } else if (value === "3") {
      // greator than 50 smaller than 70
      this.itemsMockdata = this.temp.filter((item) => {
        return (item.price >= 50 && item.price < 70)
      }) 
    } else if (value === "4") {
      // greator than 30 smaller than 50
      this.itemsMockdata = this.temp.filter((item) => {
        return (item.price >= 70 && item.price <= 100)
      }) 
    } else {
      this.itemsMockdata = this.temp;
    }
  }
}