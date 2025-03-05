import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuModelComponent } from '../menu-model/menu-model.component';
import { ModaleCalendyComponent } from '../modale-calendy/modale-calendy.component';
import { MenunavigationDirective } from '../menunavigation.directive';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, MenuModelComponent, ModaleCalendyComponent, MenunavigationDirective],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  isScrolled= false;

  @HostListener('window:scroll', [])
  onWindowScrolled(){
    this.isScrolled = window.scrollY >50;
  }

}
