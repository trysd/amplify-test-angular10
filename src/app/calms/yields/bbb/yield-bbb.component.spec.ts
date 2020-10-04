import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldBbbComponent } from './yield-bbb.component';

describe('YieldBbbComponent', () => {
  let component: YieldBbbComponent;
  let fixture: ComponentFixture<YieldBbbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YieldBbbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldBbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
