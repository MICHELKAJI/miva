import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-citation',
  standalone: true,
  imports: [ NgStyle],
  templateUrl: './citation.component.html',
  styleUrl: './citation.component.css'
})
export class CitationComponent {
  logoUrl = '/images/logo.jpeg';  // Remplace par le chemin de ton logo

}
