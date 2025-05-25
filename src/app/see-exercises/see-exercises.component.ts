import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Epreuve } from '../model/epreuve.model';
import { EpreuveService } from '../services/epreuve.service';
import renderMathInElement from 'katex/contrib/auto-render';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-exercises',
  standalone: false,
  templateUrl: './see-exercises.component.html',
  styleUrl: './see-exercises.component.css'
})
export class SeeExercisesComponent  implements OnInit, AfterViewChecked{
  public epreuves: Array<Epreuve>=[];
  @ViewChild('responseContainer') responseContainer!: ElementRef;

  constructor(private epreuveService: EpreuveService, private router: Router){}
  ngOnInit(): void {
      this.getAllEpreuves();
  }

  public getAllEpreuves(){
    this.epreuveService.getAllExercise().subscribe({
      next: data=>{
        this.epreuves=data;

      },
      error: err=>{
        console.log(err);

      }
    })
  }
ngAfterViewChecked(): void {
     if (this.responseContainer) {
        renderMathInElement(this.responseContainer.nativeElement, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ]
      });
    }
}
 public getExercise(epreuve : Epreuve){
  this.router.navigateByUrl(`exercise/${epreuve.id}`)
    

  }





}
