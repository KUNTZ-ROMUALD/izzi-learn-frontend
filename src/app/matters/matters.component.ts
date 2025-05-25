import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matters',
  standalone: false,
  templateUrl: './matters.component.html',
  styleUrl: './matters.component.css'
})
export class MattersComponent {

  constructor(private router: Router){}

  goToMath(){

    this.router.navigateByUrl("seeExercise");

  }

}
