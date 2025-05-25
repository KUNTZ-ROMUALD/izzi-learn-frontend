import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Epreuve } from '../model/epreuve.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpreuveService {

  constructor( private http:HttpClient) { }

   public saveEpreuve (epreuve : Epreuve): Observable<Epreuve>{
        return this.http.post<Epreuve>("http://localhost:8091/saveEpreuve",epreuve);
    }
   public sendFile(formData : FormData){
    return this.http.post('http://localhost:8091/imageToText', formData, {
      responseType: 'text', observe:'events',reportProgress:true
    })
   }
   public getAllExercise():Observable<Array<Epreuve>>{
    return this.http.get<Array<Epreuve>>('http://localhost:8091/getAllEpreuve')
   } 
   public getEpreuveById(epreuveId:number): Observable<Epreuve>{
        return this.http.get<Epreuve>(`http://localhost:8091/getEpreuve/${epreuveId}`);
    }
    

}
