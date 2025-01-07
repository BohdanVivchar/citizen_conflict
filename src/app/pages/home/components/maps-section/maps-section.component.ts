import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { MAPS } from './mock/maps';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';

@Component({
  selector: 'app-maps-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './maps-section.component.html',
  styleUrl: './maps-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MapsSectionComponent {
  maps = MAPS;
  activeMap = signal(0);

  prevMap(): void {
    if (this.activeMap() === 0) return;
    this.activeMap.update((prev) => prev - 1);
  }
  nextMap(): void {
    if (this.activeMap() === this.maps.length - 1) return;
    this.activeMap.update((prev) => prev + 1);
  }

  setMapIndex(index: number): void {
    this.activeMap.set(index);
  }
}
