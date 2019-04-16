import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    <span>{{counterVal}}</span>
    <button (click)="decrement()">-</button>
  `,
  styles: []
})
export class CounterComponent  {

  counterVal=1;
  increment(){
    console.log("increment");
    this.counterVal++;
  }
  decrement(){
    console.log("decrement");
    this.counterVal--;
  }
}
