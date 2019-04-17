import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">+</button>
    <span #componentCounterValue>{{counterVal}}</span>
    <button (click)="decrement()">-</button>
  `,
  styles: []
})
export class CounterComponent {
  componentCounterValue:number
  counterVal=1;
  @Input() childVal: number;
  ngOnInit(){
    this.counterVal=this.childVal;
  }
  increment(){
    console.log("increment");
    this.counterVal++;
    this.counterChange.emit(this.counterVal);
  }
  decrement(){
    console.log("decrement");
    this.counterVal--;
    this.counterChange.emit(this.counterVal);
  }
 
  @Output () counterChange = new EventEmitter();
}
