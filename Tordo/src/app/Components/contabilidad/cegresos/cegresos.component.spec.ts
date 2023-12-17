import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CegresosComponent } from './cegresos.component';

describe('CegresosComponent', () => {
  let component: CegresosComponent;
  let fixture: ComponentFixture<CegresosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CegresosComponent]
    });
    fixture = TestBed.createComponent(CegresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
