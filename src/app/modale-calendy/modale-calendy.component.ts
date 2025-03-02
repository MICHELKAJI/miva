import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modale-calendy',
  imports: [ NgIf ],
  templateUrl: './modale-calendy.component.html',
  styleUrl: './modale-calendy.component.css'
})
export class ModaleCalendyComponent {
  @Output() closeModalEvent = new EventEmitter<void>();
  isVisible = false;

  showModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.closeModalEvent.emit();
  }
}
