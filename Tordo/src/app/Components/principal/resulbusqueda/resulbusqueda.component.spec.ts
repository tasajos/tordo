import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulbusquedaComponent } from './resulbusqueda.component';

describe('ResulbusquedaComponent', () => {
  let component: ResulbusquedaComponent;
  let fixture: ComponentFixture<ResulbusquedaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResulbusquedaComponent]
    });
    fixture = TestBed.createComponent(ResulbusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
