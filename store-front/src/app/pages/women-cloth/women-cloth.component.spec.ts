import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenClothComponent } from './women-cloth.component';

describe('WomenClothComponent', () => {
  let component: WomenClothComponent;
  let fixture: ComponentFixture<WomenClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenClothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
