import { Component } from '@angular/core';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';
import { MenunavigationDirective } from '../menunavigation.directive';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ ButtonFlottingComponent, MenunavigationDirective],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {

}
