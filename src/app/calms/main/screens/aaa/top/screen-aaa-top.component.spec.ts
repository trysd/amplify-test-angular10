import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenAaaTopComponent } from './screen-aaa-top.component';

describe('ScreenAaaTopComponent', () => {
  let component: ScreenAaaTopComponent;
  let fixture: ComponentFixture<ScreenAaaTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenAaaTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenAaaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
