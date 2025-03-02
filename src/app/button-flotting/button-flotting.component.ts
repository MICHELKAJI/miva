import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-button-flotting',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button-flotting.component.html',
    styleUrl: './button-flotting.component.css'
})
export class ButtonFlottingComponent {
  isOpen = false;
  @ViewChild('buttonGroup') buttonGroup!: ElementRef;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const buttons = this.buttonGroup.nativeElement.children;

    if (this.isOpen) {
      gsap.to(buttons, {
        opacity: 1,
        y: (index) => -(index + 1) * 60,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    } else {
      gsap.to(buttons, {
        opacity: 0,
        y: 0,
        duration: 0.3,
        ease: 'back.in(1.7)'
      });
    }
  }
}
