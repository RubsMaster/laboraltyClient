import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionsDismissalsComponent } from './sanctions-dismissals.component';

describe('SanctionsDismissalsComponent', () => {
  let component: SanctionsDismissalsComponent;
  let fixture: ComponentFixture<SanctionsDismissalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionsDismissalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanctionsDismissalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
