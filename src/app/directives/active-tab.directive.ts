import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'pars-tab'
})
export class ActiveTabDirective {
  @HostBinding('class.active-tab') isActive: boolean = false;
  @HostListener('click', ['$event']) onClick(event: Event) {
    document.querySelector('pars-tab.active-tab')?.classList.toggle("active-tab");
    this.elRef.nativeElement.classList.add('active-tab');
    // const dd = document.querySelector('pars-tab.active-tab')?.classList.toggle("active-tab");
  }
  constructor(private elRef: ElementRef) {}

}
