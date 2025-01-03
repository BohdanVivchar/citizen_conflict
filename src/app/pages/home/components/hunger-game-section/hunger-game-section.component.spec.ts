import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HungerGameSectionComponent } from './hunger-game-section.component';

describe('HungerGameSectionComponent', () => {
  let component: HungerGameSectionComponent;
  let fixture: ComponentFixture<HungerGameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HungerGameSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HungerGameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
