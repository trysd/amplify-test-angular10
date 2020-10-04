import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YOrganismComponent } from './y-organism.component';

describe('YOrganismComponent', () => {
  let component: YOrganismComponent;
  let fixture: ComponentFixture<YOrganismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YOrganismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YOrganismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
