import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { LoginComponent } from './login/login.component';
//import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';



const routes: Routes = [
  //{ path: 'cursos', component: CursosComponent },
  //{ path: 'curso/:id', component: CursoDetalheComponent },
  { path: 'login', component: LoginComponent },
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  
  { path: '',component: HomeComponent,
   canActivate: [AuthGuard],
   canLoad: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
