import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdiariasComponent } from './vdiarias.component';

describe('VdiariasComponent', () => {
  let component: VdiariasComponent;
  let fixture: ComponentFixture<VdiariasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VdiariasComponent]
    });
    fixture = TestBed.createComponent(VdiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
