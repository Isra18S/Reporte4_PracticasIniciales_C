import { Component, OnInit } from '@angular/core';

import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-publicaciones-list',
  templateUrl: './publicaciones-list.component.html',
  styleUrls: ['./publicaciones-list.component.css']
})
export class PublicacionesListComponent implements OnInit {

  publicaciones: any = [];

  registros: any = [];

  constructor(private publicacionesService: PublicacionesService, private loginService: LoginService) { }

  
  ngOnInit() {
    this.getRegistros();
    this.getPublicaciones();
  }

  getPublicaciones() {
    this.publicacionesService.getPublicaciones()
      .subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      );
  }

  getPublicacionTipo(tipo: string){
    this.publicacionesService.getPublicacionTipo(tipo)
      .subscribe(
        res => {
          this.publicaciones = res;
        },
        err => console.error(err)
      );
  }



  getRegistros() {
    this.loginService.getRegisters()
      .subscribe(
        res => {
          this.registros = res;
        },
        err => console.error(err)
      );
  }



  deletePublicacion(id: string) {
    this.publicacionesService.deletePublicacion(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPublicaciones();
        },
        err => console.error(err)
      )
  }

  añadirPublicacion(id: string){
    console.log(id);
  }

  //REGISTROS

}
