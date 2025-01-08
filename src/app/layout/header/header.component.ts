import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef;
  links = [
    {
      title: 'home',
      link: '#',
    },
    {
      title: 'token',
      link: '#',
    },
    {
      title: 'team',
      link: '#',
    },
    {
      title: 'news',
      link: '#',
    },
  ];

  ngAfterViewInit(): void {
    gsap.to(this.header.nativeElement, {
      duration: 1,
      y: '0%',
      ease: 'power4.out',
    });
  }
}
