import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { CursosService } from 'src/app/services/cursos.service';
import { Registro } from 'src/app/model/Registro';
import { Cursos } from 'src/app/model/cursos';
@Component({
  selector: 'app-ver-cursos',
  templateUrl: './ver-cursos.component.html',
  styleUrls: ['./ver-cursos.component.css']
})
export class VerCursosComponent implements OnInit {

  cursos: any = [];

  curso: Cursos = {
    id: 0,
    curso: ''
  };



  constructor(private loginService: RegisterService, private activatedRoute: ActivatedRoute, private cursosService: CursosService,private router: Router) { }

  ngOnInit() {

    this.getCursos();

    const params = this.activatedRoute.snapshot.params;
    const idElegida = params.id;
    this.curso.id = idElegida;
    console.log(this.curso.id);

    if (params.id) {
      this.cursosService.getCurso(params.id)
        .subscribe(
          res => { 
            this.curso = res;
          },
          err => console.log(err)
        )
    }

  }

  getCursos() {
    this.cursosService.getCursos()
      .subscribe(
        res => {
          this.cursos = res;
        },
        err => console.error(err)
      );
  }

  saveAprobado() {
    
    this.cursosService.saveCurso(this.curso)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }

}
