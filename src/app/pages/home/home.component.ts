import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HungerGameSectionComponent } from './components/hunger-game-section/hunger-game-section.component';
import { CitizenZeroSectionComponent } from './components/citizen-zero-section/citizen-zero-section.component';
import { HeroClassSectionComponent } from './components/hero-class-section/hero-class-section.component';
import { GameModeSectionComponent } from './components/game-mode-section/game-mode-section.component';
import { MapsSectionComponent } from './components/maps-section/maps-section.component';
import { SyndicateSectionComponent } from './components/syndicate-section/syndicate-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroSectionComponent,
    HungerGameSectionComponent,
    CitizenZeroSectionComponent,
    HeroClassSectionComponent,
    GameModeSectionComponent,
    MapsSectionComponent,
    SyndicateSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
