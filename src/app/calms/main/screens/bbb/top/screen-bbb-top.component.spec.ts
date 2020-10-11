import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBbbTopComponent } from './screen-bbb-top.component';

describe('ScreenBbbTopComponent', () => {
  let component: ScreenBbbTopComponent;
  let fixture: ComponentFixture<ScreenBbbTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenBbbTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenBbbTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
