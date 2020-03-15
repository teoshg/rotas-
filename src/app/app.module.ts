
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
//import { routing } from './app.routing';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './cursos/cursos.routing.module';
import { AlunosModule } from './alunos/alunos/alunos.module';
import { FormsModule } from '@angular/forms';
//import { AlunoDetalheComponent } from './alunos/aluno-detalhe/aluno-detalhe.component';
//import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';
//import { AlunosComponent } from './alunos/alunos.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    PaginaNaoEncontradaComponent,
    //AlunoDetalheComponent,
    //AlunosFormComponent,
    //AlunosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //routing,
    CursosRoutingModule,
    AlunosModule,
    FormsModule
  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuard,
    AlunosGuard,
    AlunosDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
