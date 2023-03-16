import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { Comentarios } from 'src/app/model/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Publicacion } from 'src/app/model/publicacione';


@Component({
  selector: 'app-publicaciones-comentarios',
  templateUrl: './publicaciones-comentarios.component.html',
  styleUrls: ['./publicaciones-comentarios.component.css']
})
export class PublicacionesComentariosComponent implements OnInit {

  publicaciones: any = [];

  comentario: Comentarios = {
    id: 0,
    comentario: '',
  };
  
  
  constructor(private publicacionesService: PublicacionesService,private comentariosService: ComentariosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    const idElegida = params.id;
    this.comentario.id = idElegida;
    console.log(this.comentario.id);
    if (params.id) {
      this.publicacionesService.getPublicacion(params.id)
        .subscribe(
          res => {
            this.publicaciones = res;
          },
          err => console.log(err)
        )
    }
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

  saveNewComentario() {
    this.comentariosService.saveComentarios(this.comentario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/publicaciones']);
        },
        err => console.error(err)
      )
  }

  



}
