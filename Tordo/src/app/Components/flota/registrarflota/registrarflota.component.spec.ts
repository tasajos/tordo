import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarflotaComponent } from './registrarflota.component';

describe('RegistrarflotaComponent', () => {
  let component: RegistrarflotaComponent;
  let fixture: ComponentFixture<RegistrarflotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarflotaComponent]
    });
    fixture = TestBed.createComponent(RegistrarflotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
