import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MttoComponent } from './mtto.component';

describe('MttoComponent', () => {
  let component: MttoComponent;
  let fixture: ComponentFixture<MttoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MttoComponent]
    });
    fixture = TestBed.createComponent(MttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
