import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Publicacion } from '../model/publicacione';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getPublicaciones(){
    return this.http.get(`${this.API_URI}/publicaciones`);
  }
  

  getPublicacion(id: string){
    return this.http.get(`${this.API_URI}/publicaciones/${id}`);
  }

  getPublicacionTipo(tipo: string){
    return this.http.get(`${this.API_URI}/publicaciones/${tipo}`);
  }

  deletePublicacion(id: string){
    return this.http.delete(`${this.API_URI}/publicaciones/${id}`);
  }
  savePublicacion(publicacion: Publicacion){
    return this.http.post(`${this.API_URI}/publicaciones`,publicacion);
  }
  updatePublicacion(id: string, updatedPublicacion: Publicacion): Observable<Publicacion>{
    return this.http.put(`${this.API_URI}/publicaciones/${id}`,updatedPublicacion);
  }

}
