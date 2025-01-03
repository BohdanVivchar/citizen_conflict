import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSwiperComponent } from './mobile-swiper.component';

describe('MobileSwiperComponent', () => {
  let component: MobileSwiperComponent;
  let fixture: ComponentFixture<MobileSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
