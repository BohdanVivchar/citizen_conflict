import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BANNERS } from './mock/banners';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';

@Component({
  selector: 'app-game-mode-section',
  imports: [MobileSwiperComponent],
  templateUrl: './game-mode-section.component.html',
  styleUrl: './game-mode-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GameModeSectionComponent {
  banners = BANNERS;
}
