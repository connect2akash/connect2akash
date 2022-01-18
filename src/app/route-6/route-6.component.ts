import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-6',
  templateUrl: './route-6.component.html',
  styleUrls: ['./route-6.component.css']
})
export class Route6Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public createRange(): number[] {
    let items: number[] = [];
    for(let i = 1; i <= 5000; i++){
       items.push(i);
    }
    return items;
  }

  public onClick(index: number): void {
    alert("Button " + index + " is clicked" );
  }
}
