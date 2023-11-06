import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanovedadesComponent } from './listanovedades.component';

describe('ListanovedadesComponent', () => {
  let component: ListanovedadesComponent;
  let fixture: ComponentFixture<ListanovedadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListanovedadesComponent]
    });
    fixture = TestBed.createComponent(ListanovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
