import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';
import { ModaleCalendyComponent } from '../modale-calendy/modale-calendy.component';

@Component({
    selector: 'app-about-section',
    standalone: true,
    imports: [CommonModule, ButtonFlottingComponent, ModaleCalendyComponent],
    templateUrl: './about-section.component.html',
    styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {

}
