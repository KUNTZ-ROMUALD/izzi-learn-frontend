import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExerciseComponent } from './add-new-exercise.component';

describe('AddNewExerciseComponent', () => {
  let component: AddNewExerciseComponent;
  let fixture: ComponentFixture<AddNewExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
