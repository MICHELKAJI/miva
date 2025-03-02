import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenunavigationDirective } from '../menunavigation.directive';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-service',
    standalone: true,
    imports: [CommonModule, MenunavigationDirective],
    templateUrl: './service.component.html',
    styleUrl: './service.component.css'
})
export class ServiceComponent {
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

