import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsSectionComponent } from './maps-section.component';

describe('MapsSectionComponent', () => {
  let component: MapsSectionComponent;
  let fixture: ComponentFixture<MapsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
