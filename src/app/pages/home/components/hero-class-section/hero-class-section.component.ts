import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { HEROES } from './mock/heroes';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';

@Component({
  selector: 'app-hero-class-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './hero-class-section.component.html',
  styleUrl: './hero-class-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroClassSectionComponent {
  heroes = HEROES;
  selectedHero = signal<number>(0);

  nextSlide() {
    if (this.selectedHero() === this.heroes.length - 1) return;
    this.selectedHero.update((prev) => prev + 1);
  }

  prevSlide() {
    if (this.selectedHero() === 0) return;
    this.selectedHero.update((prev) => prev - 1);
  }

  setSlideIndex(index: number) {
    this.selectedHero.set(index);
  }
}
