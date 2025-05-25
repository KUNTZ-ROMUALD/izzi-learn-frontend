import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeExercisesComponent } from './see-exercises.component';

describe('SeeExercisesComponent', () => {
  let component: SeeExercisesComponent;
  let fixture: ComponentFixture<SeeExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeExercisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
