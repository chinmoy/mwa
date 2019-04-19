import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-smart></app-smart>
  <p [appIsVisible]='true'>Text visible 1</p>
  <p [appIsVisible]="false">Text visible 2</p>
      `,
  styles: [``]
})
export class AppComponent {
  title = 'Lab 1';
  test="value 1"
}
