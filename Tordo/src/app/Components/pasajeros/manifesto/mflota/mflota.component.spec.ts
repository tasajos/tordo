import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MflotaComponent } from './mflota.component';

describe('MflotaComponent', () => {
  let component: MflotaComponent;
  let fixture: ComponentFixture<MflotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MflotaComponent]
    });
    fixture = TestBed.createComponent(MflotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
