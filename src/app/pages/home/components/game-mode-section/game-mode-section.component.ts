import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { BANNERS } from './mock/banners';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';
import { Observer } from 'gsap/all';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-mode-section',
  imports: [MobileSwiperComponent, CommonModule],
  templateUrl: './game-mode-section.component.html',
  styleUrl: './game-mode-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameModeSectionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('title') title!: ElementRef;
  @ViewChildren('bannerRef') bannerRef!: QueryList<ElementRef<HTMLLIElement>>;
  banners = BANNERS;
  private observer: Observer[] = [];
  mask = signal({
    'mask-image':
      'radial-gradient(circle at 50% 50%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
  });

  constructor(
    public animationService: GsapAnimationService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.bannerRef.forEach((banner) => {
      this.animationService.scrollAppear(banner);
    });
    // this.activateObserver();
  }

  activateObserver(): void {
    this.bannerRef.forEach((banner, index) => {
      this.observer.push(
        Observer.create({
          target: banner.nativeElement,
          type: 'pointer',
          onMove: (self) => {},
        })
      );
    });
    Observer.create({
      target: window,
      type: 'pointer',
      onMove: (self) => {
        const mask = {
          'mask-image': `radial-gradient(circle at ${self.x}% ${self.y}% rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`,
        };
        this.mask.set(mask);
        this.cdr.detectChanges();
      },
    });
  }

  ngOnDestroy(): void {
    if ((this.observer, length)) {
      this.observer.forEach((observer) => observer.kill());
    }
  }
}
