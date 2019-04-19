import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <p *ngFor="let num of arr">
      <app-dumb [dumbInput]="num"></app-dumb>

    </p>
  `
})
export class SmartComponent implements OnInit {
  arr=["1","2","3"]
  constructor() { }

  ngOnInit() {
  }

}
