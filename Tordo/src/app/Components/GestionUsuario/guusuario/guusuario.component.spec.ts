import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuusuarioComponent } from './guusuario.component';

describe('GuusuarioComponent', () => {
  let component: GuusuarioComponent;
  let fixture: ComponentFixture<GuusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuusuarioComponent]
    });
    fixture = TestBed.createComponent(GuusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
