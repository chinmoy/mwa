import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      Counter Component <app-counter  [childVal]="parentVal" (counterChange)="receiveChildVal($event)"></app-counter>
      <p>Component Counter Value= {{currentCounterValue}}</p>`,
  styles: [``]
})
export class AppComponent {
  title = 'Lab 1';
  parentVal:number=20;
  currentCounterValue:number;
  receiveChildVal($event){
    console.log($event);
    this.currentCounterValue=$event;
  }
}
