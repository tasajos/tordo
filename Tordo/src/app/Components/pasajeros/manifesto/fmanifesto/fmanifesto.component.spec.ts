import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmanifestoComponent } from './fmanifesto.component';

describe('FmanifestoComponent', () => {
  let component: FmanifestoComponent;
  let fixture: ComponentFixture<FmanifestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FmanifestoComponent]
    });
    fixture = TestBed.createComponent(FmanifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
