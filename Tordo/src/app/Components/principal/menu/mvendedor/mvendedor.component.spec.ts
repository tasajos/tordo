import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvendedorComponent } from './mvendedor.component';

describe('MvendedorComponent', () => {
  let component: MvendedorComponent;
  let fixture: ComponentFixture<MvendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MvendedorComponent]
    });
    fixture = TestBed.createComponent(MvendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
