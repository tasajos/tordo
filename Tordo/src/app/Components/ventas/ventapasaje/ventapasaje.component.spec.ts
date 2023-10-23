import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentapasajeComponent } from './ventapasaje.component';

describe('VentapasajeComponent', () => {
  let component: VentapasajeComponent;
  let fixture: ComponentFixture<VentapasajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentapasajeComponent]
    });
    fixture = TestBed.createComponent(VentapasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
