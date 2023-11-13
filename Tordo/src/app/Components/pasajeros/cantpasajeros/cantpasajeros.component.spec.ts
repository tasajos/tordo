import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantpasajerosComponent } from './cantpasajeros.component';

describe('CantpasajerosComponent', () => {
  let component: CantpasajerosComponent;
  let fixture: ComponentFixture<CantpasajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantpasajerosComponent]
    });
    fixture = TestBed.createComponent(CantpasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
