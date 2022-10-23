import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneprojectsComponent } from './doneprojects.component';

describe('DoneprojectsComponent', () => {
  let component: DoneprojectsComponent;
  let fixture: ComponentFixture<DoneprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
