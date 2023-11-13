import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlistflotaComponent } from './adlistflota.component';

describe('AdlistflotaComponent', () => {
  let component: AdlistflotaComponent;
  let fixture: ComponentFixture<AdlistflotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdlistflotaComponent]
    });
    fixture = TestBed.createComponent(AdlistflotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
