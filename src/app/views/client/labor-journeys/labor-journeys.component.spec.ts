import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborJourneysComponent } from './labor-journeys.component';

describe('LaborJourneysComponent', () => {
  let component: LaborJourneysComponent;
  let fixture: ComponentFixture<LaborJourneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborJourneysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborJourneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
