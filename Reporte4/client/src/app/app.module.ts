import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PublicacionesFormComponent } from './components/publicaciones-form/publicaciones-form.component';
import { PublicacionesListComponent } from './components/publicaciones-list/publicaciones-list.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import { FormsModule } from '@angular/forms';

import {PublicacionesService} from './services/publicaciones.service';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionesComentariosComponent } from './components/publicaciones-comentarios/publicaciones-comentarios.component';
import { PublicacionesComentariosListComponent } from './components/publicaciones-comentarios-list/publicaciones-comentarios-list.component';
import { LoginComponent } from './login/login.component';
import { VerCursosComponent } from './components/ver-cursos/ver-cursos.component';
import { AprobadoslistComponent } from './components/aprobadoslist/aprobadoslist.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PublicacionesFormComponent,
    PublicacionesListComponent,
    UsersFormComponent,
    UsersListComponent,
    RegisterFormComponent,
    LoginFormComponent,
    PerfilComponent,
    PublicacionesComentariosComponent,
    PublicacionesComentariosListComponent,
    LoginComponent,
    VerCursosComponent,
    AprobadoslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PublicacionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
