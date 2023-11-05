import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmanifestoflotaComponent } from './admanifestoflota.component';

describe('AdmanifestoflotaComponent', () => {
  let component: AdmanifestoflotaComponent;
  let fixture: ComponentFixture<AdmanifestoflotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmanifestoflotaComponent]
    });
    fixture = TestBed.createComponent(AdmanifestoflotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
