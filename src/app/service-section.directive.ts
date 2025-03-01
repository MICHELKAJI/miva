import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appServiceSection]',
  standalone: true
})
export class ServiceSectionDirective {

  @Input() appServiceSection  : string = '';

  constructor(private elementRf : ElementRef, private router: Router) { }
  @HostListener('click')
  onClick(){
    this.navigateTo(this.appServiceSection);
  }
  navigateTo(path: string){
    this.router.navigate([path])
  }

}
