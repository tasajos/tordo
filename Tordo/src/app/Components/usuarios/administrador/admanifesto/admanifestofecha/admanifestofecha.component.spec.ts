import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmanifestofechaComponent } from './admanifestofecha.component';

describe('AdmanifestofechaComponent', () => {
  let component: AdmanifestofechaComponent;
  let fixture: ComponentFixture<AdmanifestofechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmanifestofechaComponent]
    });
    fixture = TestBed.createComponent(AdmanifestofechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
