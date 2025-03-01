import { Component } from '@angular/core';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [ ButtonFlottingComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}
