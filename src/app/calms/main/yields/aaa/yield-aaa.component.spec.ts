import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldAaaComponent } from './yield-aaa.component';

describe('YieldAaaComponent', () => {
  let component: YieldAaaComponent;
  let fixture: ComponentFixture<YieldAaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldAaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldAaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
