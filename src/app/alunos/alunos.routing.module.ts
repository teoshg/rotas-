import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AuthGuard } from '../guards/auth.guard';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos-deactivate.guard';

const alunosRoutes = [
    {path: 'alunos', 
        component: AlunosComponent, 
        canActivate: [AuthGuard],
        canActivateChild: [AlunosGuard],
        canLoad: [AuthGuard],
        children : [
            {path:'novo', component: AlunosFormComponent},
            {path:':id', component: AlunoDetalheComponent},
            {path:':id/editar', component: AlunosFormComponent,
            canDeactivate: [AlunosDeactivateGuard]
        }
    ]},
    
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}