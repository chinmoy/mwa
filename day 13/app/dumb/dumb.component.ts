import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <p appMakeBigger>
    {{dumbInput}}. dumb works!
    </p>
  `,
  
})
export class DumbComponent implements OnInit {
  @Input() dumbInput:string
  constructor() { }

  ngOnInit() {
  }

}
