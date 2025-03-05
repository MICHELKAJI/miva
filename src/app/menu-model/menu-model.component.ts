import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import gsap from 'gsap';
import { MenunavigationDirective } from '../menunavigation.directive';
import { CarouselMenuComponent } from '../carousel-menu/carousel-menu.component';

@Component({
    selector: 'app-menu-model',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective, CarouselMenuComponent],
    templateUrl: './menu-model.component.html',
    styleUrl: './menu-model.component.css'
})
export class MenuModelComponent {
  @ViewChild('modal') modal!: ElementRef;
  @Output() closeModalEvent = new EventEmitter<void>();
  @ViewChild('box') box!:ElementRef

  isVisible = false;
  showModal() {
    this.isVisible = true;
    gsap.fromTo(
      this.modal.nativeElement,
      { opacity: 0, x: "-100%" }, // Commence à gauche (hors écran)
      { opacity: 1, x: "0%", duration: 0.5, ease: "power3.out" } // Arrive au centre
    );
  }
  
  closeModal() {
    gsap.to(this.modal.nativeElement, {
      opacity: 0,
      x: "-100%", // Glisse vers la gauche
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => {
        this.isVisible = false;
        this.closeModalEvent.emit(); // Notifie le parent
      }
    });
  }
  

}
