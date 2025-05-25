import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewExerciseComponent } from './add-new-exercise/add-new-exercise.component';
import { SeeExercisesComponent } from './see-exercises/see-exercises.component';
import { MattersComponent } from './matters/matters.component';
import { ExerciseComponent } from './exercise/exercise.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"addNewExercise",component:AddNewExerciseComponent},
  {path:"matters",component:MattersComponent},
  {path:"exercise/:id",component:ExerciseComponent},
  {path:"seeExercise",component:SeeExercisesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
