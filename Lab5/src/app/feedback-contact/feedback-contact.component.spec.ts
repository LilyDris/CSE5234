import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackContactComponent } from './feedback-contact.component';

describe('FeedbackContactComponent', () => {
  let component: FeedbackContactComponent;
  let fixture: ComponentFixture<FeedbackContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
