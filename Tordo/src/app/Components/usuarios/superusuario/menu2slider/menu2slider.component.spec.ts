import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu2sliderComponent } from './menu2slider.component';

describe('Menu2sliderComponent', () => {
  let component: Menu2sliderComponent;
  let fixture: ComponentFixture<Menu2sliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Menu2sliderComponent]
    });
    fixture = TestBed.createComponent(Menu2sliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
