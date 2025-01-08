import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BANNERS } from './mock/banners';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-game-mode-section',
  imports: [MobileSwiperComponent],
  templateUrl: './game-mode-section.component.html',
  styleUrl: './game-mode-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameModeSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChildren('bannerRef') bannerRef!: QueryList<ElementRef<HTMLLIElement>>;
  banners = BANNERS;

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.bannerRef.forEach((banner) => {
      this.animationService.scrollAppear(banner);
    });
  }
}
