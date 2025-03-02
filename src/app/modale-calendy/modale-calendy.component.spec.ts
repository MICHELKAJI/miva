import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleCalendyComponent } from './modale-calendy.component';

describe('ModaleCalendyComponent', () => {
  let component: ModaleCalendyComponent;
  let fixture: ComponentFixture<ModaleCalendyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleCalendyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaleCalendyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
