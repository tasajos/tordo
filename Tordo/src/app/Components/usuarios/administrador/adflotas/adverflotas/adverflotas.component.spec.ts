import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverflotasComponent } from './adverflotas.component';

describe('AdverflotasComponent', () => {
  let component: AdverflotasComponent;
  let fixture: ComponentFixture<AdverflotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdverflotasComponent]
    });
    fixture = TestBed.createComponent(AdverflotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
