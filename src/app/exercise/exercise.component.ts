import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { EpreuveService } from '../services/epreuve.service';
import { Epreuve } from '../model/epreuve.model';
import { ActivatedRoute } from '@angular/router';
import renderMathInElement from 'katex/contrib/auto-render';

@Component({
  selector: 'app-exercise',
  standalone: false,
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent implements OnInit, AfterViewChecked {
  public epreuveId! :  number;
  public epreuve!: Epreuve;
  @ViewChild('responseContainer') responseContainer! : ElementRef;
  
  constructor(private epreuveService: EpreuveService, private activeRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.epreuveId=this.activeRoute.snapshot.params["id"];
     
   this.epreuveService.getEpreuveById(this.epreuveId).subscribe({
   
      next: data=>{
       
        this.epreuve=data;
        
      },
      error: err=>{
        console.log(err);
      }
    }) 
      
  }
  ngAfterViewChecked(): void {
    if(this.responseContainer){
      renderMathInElement(this.responseContainer.nativeElement,{
        delimiters :[
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        {left: '\\(', right: '\\)', display: false},
        {left: '\\[', right: '\\]', display: true}

        ]
      })
    }
      
  }

}
