import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationsComponent } from './collaborations.component';

describe('CollaborationsComponent', () => {
  let component: CollaborationsComponent;
  let fixture: ComponentFixture<CollaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
