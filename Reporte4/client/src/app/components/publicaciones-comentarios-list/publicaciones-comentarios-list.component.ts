import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-publicaciones-comentarios-list',
  templateUrl: './publicaciones-comentarios-list.component.html',
  styleUrls: ['./publicaciones-comentarios-list.component.css']
})
export class PublicacionesComentariosListComponent implements OnInit {

  comentarios: any = [];

  constructor(private comentariosService: ComentariosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.comentariosService.getComentario(params.id)
        .subscribe(
          res => {
            this.comentarios = res;
          },
          err => console.log(err)
        )
    }
  }

  getComentarios() {
    this.comentariosService.getComentarios()
      .subscribe(
        res => {
          this.comentarios = res;
        },
        err => console.error(err)
      );
  }
}

