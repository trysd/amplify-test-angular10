import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YMoleculeComponent } from './y-molecule.component';

describe('YMoleculeComponent', () => {
  let component: YMoleculeComponent;
  let fixture: ComponentFixture<YMoleculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YMoleculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YMoleculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
