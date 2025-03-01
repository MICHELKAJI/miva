import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ServiceComponent } from '../service/service.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { ContactComponent } from '../contact/contact.component';
import { CitationComponent } from '../citation/citation.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ BannerComponent, ServiceComponent, FeedbackComponent, ContactComponent, CitationComponent, FooterComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
