import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from '../curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from '../curso-detalhe/curso-detalhe.component';
import { AuthGuard } from '../guards/auth.guard';


const cursosRoutes: Routes = [
  { path: 'cursos',
   component: CursosComponent,
   canActivate: [AuthGuard] 
  },
  
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'curso/:id', component: CursoDetalheComponent }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}