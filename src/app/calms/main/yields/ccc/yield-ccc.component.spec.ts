import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldCccComponent } from './yield-ccc.component';

describe('YieldCccComponent', () => {
  let component: YieldCccComponent;
  let fixture: ComponentFixture<YieldCccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldCccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldCccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
