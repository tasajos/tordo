import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadofinanzasComponent } from './estadofinanzas.component';

describe('EstadofinanzasComponent', () => {
  let component: EstadofinanzasComponent;
  let fixture: ComponentFixture<EstadofinanzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadofinanzasComponent]
    });
    fixture = TestBed.createComponent(EstadofinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
