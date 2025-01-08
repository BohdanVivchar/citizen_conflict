import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSectionComponent } from './token-section.component';

describe('TokenSectionComponent', () => {
  let component: TokenSectionComponent;
  let fixture: ComponentFixture<TokenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TokenSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
