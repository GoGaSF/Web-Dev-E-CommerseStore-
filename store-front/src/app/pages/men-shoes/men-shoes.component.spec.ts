import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenShoesComponent } from './men-shoes.component';

describe('MenShoesComponent', () => {
  let component: MenShoesComponent;
  let fixture: ComponentFixture<MenShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
