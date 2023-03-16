import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { CursosAprobadosService } from 'src/app/services/cursos-aprobados.service';

@Component({
  selector: 'app-aprobadoslist',
  templateUrl: './aprobadoslist.component.html',
  styleUrls: ['./aprobadoslist.component.css']
})
export class AprobadoslistComponent implements OnInit {
  cursos: any = [];

  constructor(private cursosService: CursosAprobadosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    console.log(params.id)
    if (params.id) {
      this.cursosService.getCursoAprobado(params.id)
        .subscribe(
          res => {
            this.cursos = res;
          },
          err => console.log(err)
        )
    }

    this.cursos
  }
  getCursosAprobados() {
    this.cursosService.getCursosAprobados()
      .subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
      );
  }
}
