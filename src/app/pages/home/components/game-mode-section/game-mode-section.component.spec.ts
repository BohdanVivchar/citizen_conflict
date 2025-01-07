import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameModeSectionComponent } from './game-mode-section.component';

describe('GameModeSectionComponent', () => {
  let component: GameModeSectionComponent;
  let fixture: ComponentFixture<GameModeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameModeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameModeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
