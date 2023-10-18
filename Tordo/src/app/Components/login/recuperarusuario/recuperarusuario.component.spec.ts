import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarusuarioComponent } from './recuperarusuario.component';

describe('RecuperarusuarioComponent', () => {
  let component: RecuperarusuarioComponent;
  let fixture: ComponentFixture<RecuperarusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarusuarioComponent]
    });
    fixture = TestBed.createComponent(RecuperarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
