import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosoperacionalesComponent } from './costosoperacionales.component';

describe('CostosoperacionalesComponent', () => {
  let component: CostosoperacionalesComponent;
  let fixture: ComponentFixture<CostosoperacionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostosoperacionalesComponent]
    });
    fixture = TestBed.createComponent(CostosoperacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
