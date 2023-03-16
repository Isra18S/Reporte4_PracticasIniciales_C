import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Registro } from '../model/Registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getRegisters(){
    return this.http.get(`${this.API_URI}/register`);
  }

  getRegister(id: string){
    return this.http.get(`${this.API_URI}/register/${id}`);
  }
  deleteRegistern(id: string){
    return this.http.delete(`${this.API_URI}/register/${id}`);
  }
  saveRegister(registro: Registro){
    return this.http.post(`${this.API_URI}/register`,registro);
  }
  updateRegister(id: string|undefined, updateRegistro: Registro): Observable<Registro>{
    return this.http.put(`${this.API_URI}/register/${id}`,updateRegistro);
  }

}
