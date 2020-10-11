import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YAtomComponent } from './y-atom.component';

describe('YAtomComponent', () => {
  let component: YAtomComponent;
  let fixture: ComponentFixture<YAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YAtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
