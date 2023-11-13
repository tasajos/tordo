import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MttopasivoComponent } from './mttopasivo.component';

describe('MttopasivoComponent', () => {
  let component: MttopasivoComponent;
  let fixture: ComponentFixture<MttopasivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MttopasivoComponent]
    });
    fixture = TestBed.createComponent(MttopasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
