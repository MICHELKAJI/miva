import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {

  formData = {
    name: '',
    category: 'particulier',
    phone: '',
    message: ''
  };
  
  messageSent = false;

  sendEmail(form: NgForm) {
    if (form.valid) {
      const templateParams = {
        name: this.formData.name,
        category: this.formData.category,
        phone: this.formData.phone || 'Non fourni',
        message: this.formData.message,
      };

      emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then(
          (response) => {
            console.log('Email envoyé avec succès !', response);
            this.messageSent = true;
            form.reset();
            setTimeout(() => (this.messageSent = false), 5000);
          },
          (error) => {
            console.error('Erreur lors de l’envoi de l’email', error);
          }
        );
    }
  }

}
