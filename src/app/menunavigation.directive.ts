import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMenunavigation]',
  standalone: true
})
export class MenunavigationDirective {
  @Input() appMenunavigation: string = '';

  constructor(private elementRf: ElementRef, @Inject(Router) private router: Router) { }

  @HostListener('click')
  onClick() {
    this.navigateTo(this.appMenunavigation);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
