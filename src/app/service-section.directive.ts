import { Directive, ElementRef, Input, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appServiceSection]',
  standalone: true,
})
export class ServiceSectionDirective {

  @Input() appServiceSection: string = '';

  private router = inject(Router); //

  constructor(private elementRf: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.navigateTo(this.appServiceSection);
  }

  private navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

