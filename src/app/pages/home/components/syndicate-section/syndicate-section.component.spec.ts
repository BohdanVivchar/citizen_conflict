import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndicateSectionComponent } from './syndicate-section.component';

describe('SyndicateSectionComponent', () => {
  let component: SyndicateSectionComponent;
  let fixture: ComponentFixture<SyndicateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyndicateSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyndicateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
