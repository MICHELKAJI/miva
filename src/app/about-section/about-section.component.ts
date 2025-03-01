import { Component } from '@angular/core';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [ ButtonFlottingComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {

}
