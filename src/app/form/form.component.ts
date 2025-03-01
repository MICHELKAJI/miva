import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ NgIf, FormsModule ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  formData = {
    name: '',
    category: 'particulier',
    phone: '',
    message:'',
  };
  
  messageSent = false;

  sendEmail(contactForm: any) {
    if (contactForm.valid) {
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
            contactForm.reset();
            setTimeout(() => (this.messageSent = false), 5000);
          },
          (error) => {
            console.error('Erreur lors de l’envoi de l’email', error);
          }
        );
    }
  }

}
