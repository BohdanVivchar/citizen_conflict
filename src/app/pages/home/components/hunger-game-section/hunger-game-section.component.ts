import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  QueryList,
  signal,
  ViewChildren,
  viewChildren,
} from '@angular/core';
import { twists } from './mock/twists';
import { CommonModule } from '@angular/common';
import { MobileSwiperComponent } from '../../../../shared/components/mobile-swiper/mobile-swiper.component';

@Component({
  selector: 'app-hunger-game-section',
  imports: [CommonModule, MobileSwiperComponent],
  templateUrl: './hunger-game-section.component.html',
  styleUrl: './hunger-game-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HungerGameSectionComponent {
  @ViewChildren('description') description?: QueryList<
    ElementRef<HTMLDivElement>
  >;
  items = twists;
  selectedCard = signal<null | number>(null);
  hoveredStyle = signal({});

  onHover(id: number | null) {
    if (!id) {
      this.selectedCard.set(null);
      return;
    }
    this.selectedCard.set(id);
    const height =
      this.description?.toArray()[id - 1].nativeElement.clientHeight;
    this.hoveredStyle.set({ height: `${height}px`, marginTop: '0rem' });
  }
}
