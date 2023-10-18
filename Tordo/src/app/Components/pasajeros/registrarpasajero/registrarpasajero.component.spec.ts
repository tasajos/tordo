import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpasajeroComponent } from './registrarpasajero.component';

describe('RegistrarpasajeroComponent', () => {
  let component: RegistrarpasajeroComponent;
  let fixture: ComponentFixture<RegistrarpasajeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarpasajeroComponent]
    });
    fixture = TestBed.createComponent(RegistrarpasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
