import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarflotaComponent } from './buscarflota.component';

describe('BuscarflotaComponent', () => {
  let component: BuscarflotaComponent;
  let fixture: ComponentFixture<BuscarflotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarflotaComponent]
    });
    fixture = TestBed.createComponent(BuscarflotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
