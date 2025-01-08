import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  imports: [CommonModule],
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.scss',
})
export class NewsItemComponent {
  @Input() title?: string;
  @Input() description?: string;
}
