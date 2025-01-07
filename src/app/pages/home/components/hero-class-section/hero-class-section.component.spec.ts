import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroClassSectionComponent } from './hero-class-section.component';

describe('HeroClassSectionComponent', () => {
  let component: HeroClassSectionComponent;
  let fixture: ComponentFixture<HeroClassSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroClassSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroClassSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
