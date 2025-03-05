import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMenuComponent } from './carousel-menu.component';

describe('CarouselMenuComponent', () => {
  let component: CarouselMenuComponent;
  let fixture: ComponentFixture<CarouselMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
