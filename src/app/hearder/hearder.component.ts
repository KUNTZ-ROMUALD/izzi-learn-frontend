import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hearder',
  standalone: false,
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.css'
})
export class HearderComponent implements OnInit {

  constructor( private router : Router){

  }
  
  ngOnInit(): void {
    
  }
  gotoHome(){

    this.router.navigateByUrl('/home')

  }
  public goToAddExercise(){
    this.router.navigateByUrl("/addNewExercise")
  }
  goToMatters(){
    this.router.navigateByUrl("matters")
  }

}
