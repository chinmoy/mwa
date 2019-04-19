import { Directive,ElementRef,HostBinding,OnInit,HostListener  } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {
  @HostBinding ('style.font-size') currentFontSize;
  fontSize:number;

  constructor(el: ElementRef) {
    this.currentFontSize="16px";
   
  }
  @HostListener('dblclick') makeMeBigger(){
  
    let size:number = parseInt(this.currentFontSize) + 2;
    this.currentFontSize =  size  + 'px';
  }

}
