import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdregistrarflotasComponent } from './adregistrarflotas.component';

describe('AdregistrarflotasComponent', () => {
  let component: AdregistrarflotasComponent;
  let fixture: ComponentFixture<AdregistrarflotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdregistrarflotasComponent]
    });
    fixture = TestBed.createComponent(AdregistrarflotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
