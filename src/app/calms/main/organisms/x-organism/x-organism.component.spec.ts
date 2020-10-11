import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XOrganismComponent } from './x-organism.component';

describe('XOrganismComponent', () => {
  let component: XOrganismComponent;
  let fixture: ComponentFixture<XOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
