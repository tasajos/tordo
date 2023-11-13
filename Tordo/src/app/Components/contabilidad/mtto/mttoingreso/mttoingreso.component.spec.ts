import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MttoingresoComponent } from './mttoingreso.component';

describe('MttoingresoComponent', () => {
  let component: MttoingresoComponent;
  let fixture: ComponentFixture<MttoingresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MttoingresoComponent]
    });
    fixture = TestBed.createComponent(MttoingresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
