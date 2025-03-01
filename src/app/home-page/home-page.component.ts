import { Component } from '@angular/core';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ ServiceComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
