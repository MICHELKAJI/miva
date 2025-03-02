import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavigationDirective } from '../menunavigation.directive';

@Component({
    selector: 'app-service',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective],
    templateUrl: './service.component.html',
    styleUrl: './service.component.css'
})
export class ServiceComponent {
 
}

