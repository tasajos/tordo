import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CingresosComponent } from './cingresos.component';

describe('CingresosComponent', () => {
  let component: CingresosComponent;
  let fixture: ComponentFixture<CingresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CingresosComponent]
    });
    fixture = TestBed.createComponent(CingresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
