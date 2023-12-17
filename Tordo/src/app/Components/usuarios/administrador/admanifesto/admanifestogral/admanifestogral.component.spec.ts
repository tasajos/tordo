import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmanifestogralComponent } from './admanifestogral.component';

describe('AdmanifestogralComponent', () => {
  let component: AdmanifestogralComponent;
  let fixture: ComponentFixture<AdmanifestogralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmanifestogralComponent]
    });
    fixture = TestBed.createComponent(AdmanifestogralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
