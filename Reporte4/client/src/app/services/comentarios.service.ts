import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Comentarios } from '../model/comentarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  
  getComentarios(){
    return this.http.get(`${this.API_URI}/comentarios`);
  }
  
  getComentario(id: string){
    return this.http.get(`${this.API_URI}/comentarios/${id}`);
  }
  deleteComentarios(id: string){
    return this.http.delete(`${this.API_URI}/comentarios/${id}`);
  }
  saveComentarios(comentario: Comentarios|JSON){
    return this.http.post(`${this.API_URI}/comentarios`,comentario);
  }
  updateComentariosn(id: string, updatedComentario: Comentarios): Observable<Comentarios>{
    return this.http.put(`${this.API_URI}/comentarios/${id}`,updatedComentario);
  }
}
