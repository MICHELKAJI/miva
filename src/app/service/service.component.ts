import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavigationDirective } from '../menunavigation.directive';
import { ModaleCalendyComponent } from '../modale-calendy/modale-calendy.component';



@Component({
    selector: 'app-service',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective, ModaleCalendyComponent],
    templateUrl: './service.component.html',
    styleUrl: './service.component.css'
})
export class ServiceComponent {
 
}
