import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public image:any="assets/images/boy.jpg"
  constructor(){}
  ngOnInit(): void {
    
  }

}
