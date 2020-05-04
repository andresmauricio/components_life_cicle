import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResalt]'
})
export class ResaltDirective {
  @Input('appResalt') private colorInput: string;
  constructor(private el: ElementRef) { 
    console.log('Directiva llamada');
    // el.nativeElement.style.backgroundColor = "yellow"
  }

  @HostListener('mouseenter') intro() { 
    this.auxColor(this.colorInput || 'yellow')
    // this.el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') exit() { 
    this.el.nativeElement.style.backgroundColor = null;
  }

  private auxColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
