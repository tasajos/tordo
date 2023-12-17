import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactivosComponent } from './cactivos.component';

describe('CactivosComponent', () => {
  let component: CactivosComponent;
  let fixture: ComponentFixture<CactivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CactivosComponent]
    });
    fixture = TestBed.createComponent(CactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
