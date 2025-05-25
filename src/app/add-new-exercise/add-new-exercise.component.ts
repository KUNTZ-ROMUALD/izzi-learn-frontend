import {  HttpDownloadProgressEvent, HttpEventType } from '@angular/common/http';
import { AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import { EpreuveService } from '../services/epreuve.service';
import { Epreuve } from '../model/epreuve.model';
import renderMathInElement from 'katex/contrib/auto-render';

@Component({
  selector: 'app-add-new-exercise',
  standalone: false,
  templateUrl: './add-new-exercise.component.html',
  styleUrl: './add-new-exercise.component.css'
})
export class AddNewExerciseComponent implements AfterViewChecked{

  selectedFile?: File;
  message : any  = '';
  reponse : any = "";
  enonce: string = '';
  solution: string = '';
  epreuve!: Epreuve;
  @ViewChild('responseContainer') responseContainer!: ElementRef;

  constructor(private epreuveServive:EpreuveService){}

   onFileSelected(input: HTMLInputElement) {
    const fileList = input.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
      this.message = '';
    }
  }

    onUpload() {

   
    
    if (!this.selectedFile) {
      this.message = 'Veuillez choisir un fichier.';
      return;
    } 

    const formData = new FormData();
    formData.append('file', this.selectedFile);
 
    this.epreuveServive.sendFile(formData).subscribe({
      next: (evt) => {
        if (evt.type=== HttpEventType.DownloadProgress){
          this.reponse= (evt as HttpDownloadProgressEvent).partialText;
        }
        
      },
      error: (err) => {
        console.error(err);
        this.message = 'Erreur lors de l’envoi du fichier.';
      },
      complete : () =>{
       this.separerEnonceEtSolution(this.reponse);

       if(this.solution!=""){
       this.epreuve={
        content: this.enonce,
        subject: 'anonymos',
        corrected : this.solution,
       };
       this.epreuveServive.saveEpreuve(this.epreuve).subscribe({
        next: resp =>{
          alert("cours enregistrer avec succès")
        },
        error: err =>{
          alert("donnée non save");
          
        }
       })

       }
      }
    }); 
  }
  
    separerEnonceEtSolution(content :string): void {
     let startworld = content.indexOf("Proposition de solution");
     let endworld= content.length
    
    
    if (startworld!=-1) { 
      this.enonce = content.slice(0,startworld-4),
      this.solution = content.slice( startworld+28,endworld)
    } else {
      alert('Impossible solution');
      this.enonce = '';
      this.solution = '';
    }
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
  
}


