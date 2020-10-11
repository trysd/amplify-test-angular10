import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCccTopComponent } from './screen-ccc-top.component';

describe('ScreenCccTopComponent', () => {
  let component: ScreenCccTopComponent;
  let fixture: ComponentFixture<ScreenCccTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCccTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCccTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
