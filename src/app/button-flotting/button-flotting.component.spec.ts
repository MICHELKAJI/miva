import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFlottingComponent } from './button-flotting.component';

describe('ButtonFlottingComponent', () => {
  let component: ButtonFlottingComponent;
  let fixture: ComponentFixture<ButtonFlottingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFlottingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFlottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
