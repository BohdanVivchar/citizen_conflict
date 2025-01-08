import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;

  ngAfterViewInit(): void {
    gsap.from(this.title.nativeElement, {
      duration: 1,
      opacity: 0,
      y: '100%',
      ease: '',
    });
  }
}
