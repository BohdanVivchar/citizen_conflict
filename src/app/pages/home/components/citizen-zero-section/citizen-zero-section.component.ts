import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GsapAnimationService } from '../../../../services/gsap-animation.service';

@Component({
  selector: 'app-citizen-zero-section',
  imports: [],
  templateUrl: './citizen-zero-section.component.html',
  styleUrl: './citizen-zero-section.component.scss',
})
export class CitizenZeroSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('banner') banner!: ElementRef;

  constructor(public animationService: GsapAnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader(this.title);
    this.animationService.scrollAppear(this.banner);
  }
}
