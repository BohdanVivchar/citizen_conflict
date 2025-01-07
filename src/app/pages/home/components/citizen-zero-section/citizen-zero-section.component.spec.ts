import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenZeroSectionComponent } from './citizen-zero-section.component';

describe('CitizenZeroSectionComponent', () => {
  let component: CitizenZeroSectionComponent;
  let fixture: ComponentFixture<CitizenZeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitizenZeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenZeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
