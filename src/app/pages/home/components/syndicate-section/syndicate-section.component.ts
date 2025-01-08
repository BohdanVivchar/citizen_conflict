import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { SYNDICATES } from './mock/syndicates';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-syndicate-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './syndicate-section.component.html',
  styleUrl: './syndicate-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SyndicateSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChildren('bannerRef') mapRef!: QueryList<ElementRef<HTMLLIElement>>;
  syndicates = SYNDICATES;
  activeSlideIndex = signal(0);

  generateColorByIndex(index: number): string {
    switch (index) {
      case 0:
        return '#FF0116';
      case 2:
        return '#FF01FF';
      default:
        return '#BDFF00';
    }
  }

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.scrollAppearFromBottom(this.title);
    this.mapRef.forEach((map, index) => {
      this.animationService.scrollAppear(map);
    });
  }

  setMapIndex(index: number): void {
    this.activeSlideIndex.set(index);
  }
}
