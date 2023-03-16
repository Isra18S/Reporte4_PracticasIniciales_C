import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cursos } from '../model/cursos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCursos(){
    return this.http.get(`${this.API_URI}/cursos`);
  }
  
  getCurso(id: string){
    return this.http.get(`${this.API_URI}/cursos/${id}`);
  }
  deleteCurso(id: string){
    return this.http.delete(`${this.API_URI}/cursos/${id}`);
  }
  saveCurso(curso: Cursos){
    return this.http.post(`${this.API_URI}/cursos`,curso);
  }
  updateCurso(id: string, updatedCurso: Cursos): Observable<Cursos>{
    return this.http.put(`${this.API_URI}/cursos/${id}`,updatedCurso);
  }
}
