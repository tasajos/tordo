import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPasajeComponent } from './ticket-pasaje.component';

describe('TicketPasajeComponent', () => {
  let component: TicketPasajeComponent;
  let fixture: ComponentFixture<TicketPasajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketPasajeComponent]
    });
    fixture = TestBed.createComponent(TicketPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
