import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenClothComponent } from './men-cloth.component';

describe('MenClothComponent', () => {
  let component: MenClothComponent;
  let fixture: ComponentFixture<MenClothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenClothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
