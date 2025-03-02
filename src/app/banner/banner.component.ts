import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, ButtonFlottingComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css'
})
export class BannerComponent {

}
