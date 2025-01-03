import { Component } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HungerGameSectionComponent } from './components/hunger-game-section/hunger-game-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroSectionComponent, HungerGameSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
