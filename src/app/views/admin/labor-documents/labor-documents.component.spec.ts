import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborDocumentsComponent } from './labor-documents.component';

describe('LaborDocumentsComponent', () => {
  let component: LaborDocumentsComponent;
  let fixture: ComponentFixture<LaborDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborDocumentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
