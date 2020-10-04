import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XMoleculeComponent } from './x-molecule.component';

describe('XMoleculeComponent', () => {
  let component: XMoleculeComponent;
  let fixture: ComponentFixture<XMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
