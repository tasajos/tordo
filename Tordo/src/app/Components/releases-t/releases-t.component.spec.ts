import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesTComponent } from './releases-t.component';

describe('ReleasesTComponent', () => {
  let component: ReleasesTComponent;
  let fixture: ComponentFixture<ReleasesTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasesTComponent]
    });
    fixture = TestBed.createComponent(ReleasesTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
