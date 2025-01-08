import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NEWS } from './mock/news';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-news-section',
  imports: [NewsItemComponent, MobileSwiperComponent],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('cards') cards!: ElementRef;
  news = NEWS;

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.scrollAppearFromBottom(this.title);
    this.animationService.scrollAppearChildren(this.cards);
  }
}
