import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopTimerComponent } from './stop-timer.component';

describe('StopTimerComponent', () => {
  let component: StopTimerComponent;
  let fixture: ComponentFixture<StopTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
