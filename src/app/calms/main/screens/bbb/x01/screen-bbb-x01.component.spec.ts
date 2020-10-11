import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBbbX01Component } from './screen-bbb-x01.component';

describe('ScreenBbbX01Component', () => {
  let component: ScreenBbbX01Component;
  let fixture: ComponentFixture<ScreenBbbX01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenBbbX01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenBbbX01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
