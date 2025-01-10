import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  QueryList,
  signal,
  viewChild,
  ViewChild,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { twists } from './mock/twists';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-hunger-game-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './hunger-game-section.component.html',
  styleUrl: './hunger-game-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HungerGameSectionComponent implements AfterViewInit {
  @ViewChild('titleContainer') titleContainer!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;
  @ViewChildren('description') description?: QueryList<
    ElementRef<HTMLDivElement>
  >;

  @ViewChildren('descriptionMob') descriptionMob?: QueryList<
    ElementRef<HTMLDivElement>
  >;
  items = twists;
  selectedCard = signal<null | number>(null);
  hoveredStyle = signal({});
  hoveredStyleMob = signal({});

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationService.animateHeader(this.titleContainer);
      this.animationService.scrollAppearChildren(this.cards);
    }, 511);
  }

  onHover(id: number | null) {
    if (!id) {
      this.selectedCard.set(null);
      return;
    }
    this.selectedCard.set(id);
    const height =
      this.description?.toArray()[id - 1].nativeElement.clientHeight;
    const heightMob =
      this.descriptionMob?.toArray()[id - 1].nativeElement.clientHeight;
    this.hoveredStyle.set({ height: `${height}px`, marginTop: '0rem' });
    this.hoveredStyleMob.set({ height: `${heightMob}px`, marginTop: '0rem' });
  }
}
