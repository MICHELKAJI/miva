import { NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [
        CommonModule,
        NgFor,
        NgStyle
    ],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  images = [
    { avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    { avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    { avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    {avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    { avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    { avatar: "/images/FFF.jpg", name:"Robert", title:"Business Man", text:"Excellent service de la part de miva takatisha grouve nous le recommander pour tous vos services."},
    
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
