import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import { MAPS } from './mock/maps';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';
import gsap from 'gsap';

@Component({
  selector: 'app-maps-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './maps-section.component.html',
  styleUrl: './maps-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapsSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('description') description!: ElementRef;
  @ViewChild('banner') banner!: ElementRef;
  @ViewChild('pagination') pagination!: ElementRef;
  maps = MAPS;
  activeMap = signal(0);

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.animationService.scrollAppear(this.banner);
    this.animationService.scrollAppear(this.pagination);
  }

  prevMap(): void {
    if (this.activeMap() === 0) return;
    this.activeMap.update((prev) => prev - 1);
    gsap.from(this.banner.nativeElement, { opacity: 0, duration: 0.7 });
    gsap.from(this.description.nativeElement, { opacity: 0, duration: 0.7 });
  }

  nextMap(): void {
    if (this.activeMap() === this.maps.length - 1) return;
    this.activeMap.update((prev) => prev + 1);
    gsap.from(this.banner.nativeElement, { opacity: 0, duration: 0.7 });
    gsap.from(this.description.nativeElement, { opacity: 0, duration: 0.7 });
  }

  setMapIndex(index: number): void {
    this.activeMap.set(index);
    gsap.from(this.banner.nativeElement, { opacity: 0, duration: 0.7 });
    gsap.from(this.description.nativeElement, { opacity: 0, duration: 0.7 });
  }
}
