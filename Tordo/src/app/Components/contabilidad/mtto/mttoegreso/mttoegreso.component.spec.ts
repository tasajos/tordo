import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MttoegresoComponent } from './mttoegreso.component';

describe('MttoegresoComponent', () => {
  let component: MttoegresoComponent;
  let fixture: ComponentFixture<MttoegresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MttoegresoComponent]
    });
    fixture = TestBed.createComponent(MttoegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
