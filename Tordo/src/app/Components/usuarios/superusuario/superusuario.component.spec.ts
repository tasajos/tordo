import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperusuarioComponent } from './superusuario.component';

describe('SuperusuarioComponent', () => {
  let component: SuperusuarioComponent;
  let fixture: ComponentFixture<SuperusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperusuarioComponent]
    });
    fixture = TestBed.createComponent(SuperusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
