import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';

// Enregistrer le plugin ScrollTrigger

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormComponent],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'] // 🔹 Correction ici
})
export class ContactComponent {
  
}
