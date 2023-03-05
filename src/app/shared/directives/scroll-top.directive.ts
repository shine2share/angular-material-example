import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  @Input() scroll2View!: HTMLElement;

  constructor() { }

  @HostListener('click')
  scroll2ViewEvent() {
    this.scroll2View.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    });
  }
}
