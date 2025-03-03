import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../form/form.component';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormComponent],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'] // 🔹 Correction ici
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('animatedBox') animatedBoxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // S'assurer que les éléments sont bien détectés
    this.animatedBoxes.changes.subscribe(() => {
      this.animateElements();
    });

    // Lancer l'animation après la première détection
    this.animateElements();
  }

  animateElements() {
    if (this.animatedBoxes.length === 0) return; // 🔹 Vérifier qu'il y a des éléments

    this.animatedBoxes.forEach((box, index) => {
      gsap.from(box.nativeElement, {
        opacity: 0,
        y: 100,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: box.nativeElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // 🔹 Forcer la mise à jour de ScrollTrigger après les animations
    ScrollTrigger.refresh();
  }
}
