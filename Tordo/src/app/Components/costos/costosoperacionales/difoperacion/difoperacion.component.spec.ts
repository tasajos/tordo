import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifoperacionComponent } from './difoperacion.component';

describe('DifoperacionComponent', () => {
  let component: DifoperacionComponent;
  let fixture: ComponentFixture<DifoperacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifoperacionComponent]
    });
    fixture = TestBed.createComponent(DifoperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
