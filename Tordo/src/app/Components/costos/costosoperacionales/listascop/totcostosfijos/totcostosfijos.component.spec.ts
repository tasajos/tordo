import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotcostosfijosComponent } from './totcostosfijos.component';

describe('TotcostosfijosComponent', () => {
  let component: TotcostosfijosComponent;
  let fixture: ComponentFixture<TotcostosfijosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotcostosfijosComponent]
    });
    fixture = TestBed.createComponent(TotcostosfijosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
