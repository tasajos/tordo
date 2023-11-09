import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListascopComponent } from './listascop.component';

describe('ListascopComponent', () => {
  let component: ListascopComponent;
  let fixture: ComponentFixture<ListascopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListascopComponent]
    });
    fixture = TestBed.createComponent(ListascopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
