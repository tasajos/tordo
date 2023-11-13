import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpatrimonioComponent } from './cpatrimonio.component';

describe('CpatrimonioComponent', () => {
  let component: CpatrimonioComponent;
  let fixture: ComponentFixture<CpatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpatrimonioComponent]
    });
    fixture = TestBed.createComponent(CpatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
