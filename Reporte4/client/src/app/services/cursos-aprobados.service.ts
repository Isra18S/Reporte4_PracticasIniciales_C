import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CursosAprobados } from '../model/cursosAprobados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosAprobadosService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCursosAprobados(){
    return this.http.get(`${this.API_URI}/cursosaprobados`);
  }
  
  getCursoAprobado(id: string){
    return this.http.get(`${this.API_URI}/cursosaprobados/${id}`);
  }
  deleteCursoAprobado(id: string){
    return this.http.delete(`${this.API_URI}/cursosaprobados/${id}`);
  }
  saveCursoAprobado(curso: CursosAprobados){
    return this.http.post(`${this.API_URI}/cursosaprobados`,curso);
  }
  updateCursoAprobado(id: string, updatedCurso: CursosAprobados): Observable<CursosAprobados>{
    return this.http.put(`${this.API_URI}/cursosaprobados/${id}`,updatedCurso);
  }
}
