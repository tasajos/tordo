import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrpasajerosComponent } from './lrpasajeros.component';

describe('LrpasajerosComponent', () => {
  let component: LrpasajerosComponent;
  let fixture: ComponentFixture<LrpasajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrpasajerosComponent]
    });
    fixture = TestBed.createComponent(LrpasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
