import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-menu',
  imports: [ NgFor, NgStyle],
  templateUrl: './carousel-menu.component.html',
  styleUrl: './carousel-menu.component.css'
})
export class CarouselMenuComponent {
  images = [
    { avatar: "/images/equipe1.jpeg"},
    { avatar: "/images/equipe2.jpeg"},
    { avatar: "/images/equipe3.jpeg"},
    { avatar: "/images/equipe4.jpeg"},
    { avatar: "/images/equipe5.jpeg"},
    { avatar: "/images/equipe7.jpeg"},
    
  ];

  currentIndex: number = 0;
  intervalId: any;
  totalImages: number = 0;

  ngOnInit() {
    this.totalImages = this.images.length;
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
  };


}
