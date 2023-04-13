import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborFileSectionsComponent } from './labor-file-sections.component';

describe('LaborFileSectionsComponent', () => {
  let component: LaborFileSectionsComponent;
  let fixture: ComponentFixture<LaborFileSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborFileSectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborFileSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
