import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonFlottingComponent } from '../button-flotting/button-flotting.component';
import gsap from 'gsap';
import { ModaleCalendyComponent } from '../modale-calendy/modale-calendy.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    imports: [CommonModule, ButtonFlottingComponent, ModaleCalendyComponent],
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css'
})
export class BannerComponent {
  @ViewChild('box') box!:ElementRef
  ngAfterViewInit() {
    gsap.from(this.box.nativeElement, { opacity: 0, y: 50, duration: 1 });
  }
}
