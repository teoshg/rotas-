import { AlunoDetalheComponent } from './../aluno-detalhe/aluno-detalhe.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from '../alunos.component';
import { AlunosFormComponent } from '../alunos-form/alunos-form.component';
import { AlunosRoutingModule } from './../alunos.routing.module';
import { AlunosService } from '../alunos.service';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent,
    AlunoDetalheComponent

  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService
  ]

})
export class AlunosModule { }
