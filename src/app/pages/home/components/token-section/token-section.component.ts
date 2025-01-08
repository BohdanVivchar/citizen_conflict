import {
  AfterViewInit,
  Component,
  ElementRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-token-section',
  imports: [],
  templateUrl: './token-section.component.html',
  styleUrl: './token-section.component.scss',
})
export class TokenSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('image1') image1!: ElementRef;
  @ViewChild('image2') image2!: ElementRef;

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.animationService.scrollFromLeft(this.image1);
    this.animationService.scrollFromRight(this.image2);
  }
}
