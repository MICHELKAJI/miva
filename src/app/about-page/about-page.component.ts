import { Component } from '@angular/core';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { CitationComponent } from '../citation/citation.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [AboutSectionComponent, CitationComponent, FooterComponent, ContactComponent],
    templateUrl: './about-page.component.html',
    styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
