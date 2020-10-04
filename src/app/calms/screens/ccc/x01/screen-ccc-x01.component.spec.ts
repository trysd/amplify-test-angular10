import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenCccX01Component } from './screen-ccc-x01.component';

describe('ScreenCccX01Component', () => {
  let component: ScreenCccX01Component;
  let fixture: ComponentFixture<ScreenCccX01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenCccX01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenCccX01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
