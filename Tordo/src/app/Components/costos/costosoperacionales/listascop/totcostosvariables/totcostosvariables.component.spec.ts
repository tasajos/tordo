import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotcostosvariablesComponent } from './totcostosvariables.component';

describe('TotcostosvariablesComponent', () => {
  let component: TotcostosvariablesComponent;
  let fixture: ComponentFixture<TotcostosvariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotcostosvariablesComponent]
    });
    fixture = TestBed.createComponent(TotcostosvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
