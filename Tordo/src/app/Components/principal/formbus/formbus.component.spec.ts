import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbusComponent } from './formbus.component';

describe('FormbusComponent', () => {
  let component: FormbusComponent;
  let fixture: ComponentFixture<FormbusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormbusComponent]
    });
    fixture = TestBed.createComponent(FormbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
