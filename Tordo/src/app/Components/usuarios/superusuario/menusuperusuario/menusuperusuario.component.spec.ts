import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusuperusuarioComponent } from './menusuperusuario.component';

describe('MenusuperusuarioComponent', () => {
  let component: MenusuperusuarioComponent;
  let fixture: ComponentFixture<MenusuperusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusuperusuarioComponent]
    });
    fixture = TestBed.createComponent(MenusuperusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
