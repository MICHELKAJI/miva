import { Component, ElementRef, QueryList, ViewChildren, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavigationDirective } from '../menunavigation.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ModaleCalendyComponent } from '../modale-calendy/modale-calendy.component';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-service',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective, ModaleCalendyComponent],
    templateUrl: './service.component.html',
    styleUrl: './service.component.css'
})
export class ServiceComponent implements AfterViewChecked {
  @ViewChildren('animatedBox') animatedBoxes!: QueryList<ElementRef>;

  private hasAnimated = new Set<Element>(); // Pour éviter les animations répétées

  ngAfterViewChecked() {
    this.animatedBoxes.forEach((box, index) => {
      if (!this.hasAnimated.has(box.nativeElement)) {
        gsap.from(box.nativeElement, {
          opacity: 0,
          y: 100,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
          delay: index * 0.2, // Décalage progressif des animations
          scrollTrigger: {
            trigger: box.nativeElement,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        this.hasAnimated.add(box.nativeElement); // Marque cet élément comme animé
      }
    });
  }
}
