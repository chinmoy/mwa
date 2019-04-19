import { Directive,Input,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
 
})
export class IsVisibleDirective {
  @Input() appIsVisible:boolean;
  visibleFlag:boolean;
  ngOnInit(){
    console.log("test")
    if(this.appIsVisible==false)
    this.el.nativeElement.style.display = 'none';
  }
  constructor(private el: ElementRef, private r: Renderer2) { console.log("test1")
   
    
   //console.log(this.appIsVisible);
  }
  
}
