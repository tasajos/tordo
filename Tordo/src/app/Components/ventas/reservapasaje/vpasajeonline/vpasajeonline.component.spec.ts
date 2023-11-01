import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpasajeonlineComponent } from './vpasajeonline.component';

describe('VpasajeonlineComponent', () => {
  let component: VpasajeonlineComponent;
  let fixture: ComponentFixture<VpasajeonlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VpasajeonlineComponent]
    });
    fixture = TestBed.createComponent(VpasajeonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
