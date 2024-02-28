import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureporteComponent } from './sureporte.component';

describe('SureporteComponent', () => {
  let component: SureporteComponent;
  let fixture: ComponentFixture<SureporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SureporteComponent]
    });
    fixture = TestBed.createComponent(SureporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
