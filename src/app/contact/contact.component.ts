import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import gsap from 'gsap';


@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
  @ViewChildren('animatedBox') animatedBoxes!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.animatedBoxes.forEach((box, index) => {
      gsap.from(box.nativeElement, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.2, // Décalage progressif des animations
        scrollTrigger: {
        trigger: box.nativeElement,
        start: "top 85%", // Déclenchement quand l’élément est visible
        toggleActions: "play none none none",
        },
      });
    });
  }
}
