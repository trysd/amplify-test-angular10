import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XAtomComponent } from './x-atom.component';

describe('XAtomComponent', () => {
  let component: XAtomComponent;
  let fixture: ComponentFixture<XAtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XAtomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
