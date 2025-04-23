import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenAccessoriesComponent } from './women-accessories.component';

describe('WomenAccessoriesComponent', () => {
  let component: WomenAccessoriesComponent;
  let fixture: ComponentFixture<WomenAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
