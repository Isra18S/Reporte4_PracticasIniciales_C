import { Component, HostBinding, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

import { Registro } from 'src/app/model/Registro';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  registro: Registro = {
    id: "0",
    name: '',
    lastname: '',
    password: '',
    email: ""
  };

  edit: boolean = false;

  constructor(private registerServices: RegisterService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.registerServices.getRegister(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.registro = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }


  saveNewRegister() {
    this.registerServices.saveRegister(this.registro)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/register']);
        },
        err => console.error(err)
      )
  }

  updateRegister() {
    this.registerServices.updateRegister("0", this.registro)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/register']);
        },
        err => console.error(err)
      )
  }

}
