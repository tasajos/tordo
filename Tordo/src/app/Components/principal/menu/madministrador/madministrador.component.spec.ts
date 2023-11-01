import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadministradorComponent } from './madministrador.component';

describe('MadministradorComponent', () => {
  let component: MadministradorComponent;
  let fixture: ComponentFixture<MadministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadministradorComponent]
    });
    fixture = TestBed.createComponent(MadministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
