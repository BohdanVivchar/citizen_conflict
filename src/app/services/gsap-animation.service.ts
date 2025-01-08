import { ElementRef, Injectable } from '@angular/core';
import gsap from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class GsapAnimationService {
  scrollAppearFromBottom(
    element: ElementRef,
    duration?: number,
    delay?: number
  ): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.nativeElement,
        start: 'top 90%',
      },
    });
    tl.from(element.nativeElement, {
      duration: 0.8,
      opacity: 0,
      y: '100%',
      delay: delay || 0,
      onComplete: () => {
        tl.kill();
      },
    });
  }

  animateHeader(
    element: ElementRef<HTMLDivElement | HTMLOListElement>,
    duration?: number,
    delay?: number
  ): void {
    element.nativeElement.childNodes.forEach((child, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element.nativeElement,
          start: 'top 70%',
        },
      });
      tl.from(child, {
        duration: 0.5,
        opacity: 0,
        y: '100%',
        delay: index * 0.2,
        onComplete: () => {
          tl.kill();
        },
      });
    });
  }

  scrollAppearChildren(
    element: ElementRef<HTMLDivElement | HTMLOListElement>,
    duration?: number,
    delay?: number
  ): void {
    element.nativeElement.childNodes.forEach((child, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element.nativeElement,
          start: 'top 70%',
        },
      });
      tl.from(child, {
        duration: 0.8,
        opacity: 0,

        delay: index * 0.4,
        onComplete: () => {
          tl.kill();
        },
      });
    });
  }

  scrollAppear(
    element: ElementRef,
    callback?: () => void,
    duration?: number,
    delay?: number
  ): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.nativeElement,
        start: 'top 50%',
      },
    });
    tl.from(element.nativeElement, {
      duration: 2,
      opacity: 0,
      delay: delay || 0,
      onComplete: () => {
        if (callback) callback();
        tl.kill();
      },
    });
  }
  scrollFromLeft(element: ElementRef, duration?: number, delay?: number): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.nativeElement,
        start: 'top 50%',
      },
    });
    tl.from(element.nativeElement, {
      duration: 1,
      opacity: 0,
      x: '-100%',
      delay: delay || 0,
      onComplete: () => {
        tl.kill();
      },
    });
  }

  scrollFromRight(
    element: ElementRef,
    duration?: number,
    delay?: number
  ): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element.nativeElement,
        start: 'top 50%',
      },
    });
    tl.from(element.nativeElement, {
      duration: 1,
      opacity: 0,
      x: '100%',
      delay: delay || 0,
      onComplete: () => {
        tl.kill();
      },
    });
  }
}
