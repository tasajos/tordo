import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservapasajeComponent } from './reservapasaje.component';

describe('ReservapasajeComponent', () => {
  let component: ReservapasajeComponent;
  let fixture: ComponentFixture<ReservapasajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservapasajeComponent]
    });
    fixture = TestBed.createComponent(ReservapasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
