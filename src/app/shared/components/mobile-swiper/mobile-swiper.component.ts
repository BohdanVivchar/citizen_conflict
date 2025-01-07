import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  EventEmitter,
  Input,
  Output,
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

  @Output() setSlideIndex = new EventEmitter<number>();

  ngAfterViewInit(): void {
    if (this.swiperEl && this.swiperEl.nativeElement) {
      this.swiperEl.nativeElement.addEventListener(
        'swiperslidechange',
        this.onSlideChange.bind(this)
      );
      setTimeout(() => {
        this.slides = Array.from(
          { length: this.swiperEl.nativeElement.swiper.slides.length },
          (_, i) => i
        );
      });
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
    this.setSlideIndex.emit(this.activeSlide);
  }

  private updateSlides(): void {
    this.slides = Array.from(
      { length: this.swiper.slides.length },
      (_, i) => i
    );
    this.activeSlide = this.swiper.activeIndex;
  }
}
