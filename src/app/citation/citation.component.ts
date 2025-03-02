import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-citation',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './citation.component.html',
    styleUrl: './citation.component.css'
})
export class CitationComponent {
  logoUrl = '/images/logo.jpeg';  // Remplace par le chemin de ton logo

}
