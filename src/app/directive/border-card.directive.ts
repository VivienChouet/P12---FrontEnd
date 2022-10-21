import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  constructor(private el : ElementRef) {
    this.setHeight(280)
    this.setBoder('#6c757d')
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBoder('#d63384');
  }

  @HostListener('mouseleave') OnMouseLeave(){
    this.setBoder('#6c757d')
  }

  setBoder(color : string){
    let setColor = 'solid 4px ' + color
this.el.nativeElement.style.border = setColor
  }

  setHeight( height : number){
this.el.nativeElement.style.height = `${height}px`}

}
