import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpasivoComponent } from './cpasivo.component';

describe('CpasivoComponent', () => {
  let component: CpasivoComponent;
  let fixture: ComponentFixture<CpasivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpasivoComponent]
    });
    fixture = TestBed.createComponent(CpasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
