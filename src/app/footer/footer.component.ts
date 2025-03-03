import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavigationDirective } from '../menunavigation.directive';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
