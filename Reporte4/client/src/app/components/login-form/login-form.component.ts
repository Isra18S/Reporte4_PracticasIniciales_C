import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Registro } from 'src/app/model/Registro';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  registros: any = [];

  registro: Registro = {
    id: "0",
    name: '',
    lastname: '',
    password: '',
    email: ""
  };


  edit: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    const idElegida = params.id;
    this.registro.id = idElegida;
    console.log(this.registro.id);
    if (params.id) {
      this.loginService.getRegister(params.id)
        .subscribe(
          res => {
            this.registros = res;
          },
          err => console.log(err)
        )
    }
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

}




