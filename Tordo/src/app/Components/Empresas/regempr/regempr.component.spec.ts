import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegemprComponent } from './regempr.component';

describe('RegemprComponent', () => {
  let component: RegemprComponent;
  let fixture: ComponentFixture<RegemprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegemprComponent]
    });
    fixture = TestBed.createComponent(RegemprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
