import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { HEROES } from './mock/heroes';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-hero-class-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './hero-class-section.component.html',
  styleUrl: './hero-class-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroClassSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;
  heroes = HEROES;
  selectedHero = signal<number>(0);

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.animationService.scrollAppearChildren(this.cards);
  }

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
