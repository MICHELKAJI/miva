import { Component } from '@angular/core';
import { ServiceSectionComponent } from '../service-section/service-section.component';
import { CitationComponent } from '../citation/citation.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';


@Component({
    selector: 'app-service-page',
    standalone: true,
    imports: [ServiceSectionComponent, CitationComponent, FooterComponent, ContactComponent],
    templateUrl: './service-page.component.html',
    styleUrl: './service-page.component.css'
})
export class ServicePageComponent {

}
