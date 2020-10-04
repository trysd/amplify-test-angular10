import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAaaX01Component } from './screen-aaa-x01.component';

describe('ScreenAaaX01Component', () => {
  let component: ScreenAaaX01Component;
  let fixture: ComponentFixture<ScreenAaaX01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAaaX01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAaaX01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
