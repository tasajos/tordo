import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MttopatrimonioComponent } from './mttopatrimonio.component';

describe('MttopatrimonioComponent', () => {
  let component: MttopatrimonioComponent;
  let fixture: ComponentFixture<MttopatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MttopatrimonioComponent]
    });
    fixture = TestBed.createComponent(MttopatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
