import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-mobile-swiper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-swiper.component.html',
  styleUrl: './mobile-swiper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileSwiperComponent implements AfterViewInit {
  @ViewChild('swiperMobile', { static: false }) swiperEl!: ElementRef;
  swiper: any = null;
  @Input() slides: any[] = [];
  activeSlide = 0;

  ngAfterViewInit(): void {
    if (this.swiperEl && this.swiperEl.nativeElement) {
      this.swiperEl.nativeElement.addEventListener(
        'swiperslidechange',
        this.onSlideChange.bind(this)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.swiperEl && this.swiperEl.nativeElement) {
      this.swiperEl.nativeElement.removeEventListener(
        'swiperslidechange',
        this.onSlideChange.bind(this)
      );
    }
  }

  private onSlideChange(event: any): void {
    const [swiper] = event.detail;
    this.swiper = swiper;
    this.updateSlides();
  }

  private updateSlides(): void {
    this.slides = Array.from(
      { length: this.swiper.slides.length },
      (_, i) => i
    );
    this.activeSlide = this.swiper.activeIndex;
  }
}
