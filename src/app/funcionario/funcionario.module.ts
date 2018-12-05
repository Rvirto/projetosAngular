import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { FuncionarioService } from './shared/service/funcionario.service';
import { MeusApontamentosComponent } from './meus-apontamentos/meus-apontamentos.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import {ChartModule} from 'primeng/components/chart/chart';
import { MeusDadosComponent } from './meus-dados/meus-dados.component';
import { InicialGestorComponent } from './inicial-gestor/inicial-gestor.component';
import { ApontamentosGestorComponent } from './apontamentos-gestor/apontamentos-gestor.component';
import { DetalhesApontamentoComponent } from './detalhes-apontamento/detalhes-apontamento.component';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import {PasswordModule} from 'primeng/components/password/password';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { RelatorioFuncionariosComponent } from './relatorio-funcionarios/relatorio-funcionarios.component';
import { DetalhesFuncionarioComponent } from './detalhes-funcionario/detalhes-funcionario.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    TooltipModule,
    ChartModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    DialogModule
  ],
  declarations: [InicialFuncionarioComponent, MeusApontamentosComponent,
     MeusDadosComponent, InicialGestorComponent, ApontamentosGestorComponent,
      DetalhesApontamentoComponent, CadastroFuncionarioComponent,
       RelatorioFuncionariosComponent, DetalhesFuncionarioComponent],
  exports: [InicialFuncionarioComponent, MeusApontamentosComponent, MeusDadosComponent,
     InicialGestorComponent, ApontamentosGestorComponent, DetalhesApontamentoComponent,
    CadastroFuncionarioComponent, RelatorioFuncionariosComponent,
  DetalhesFuncionarioComponent],
  providers: [FuncionarioService]
})
export class FuncionarioModule { }
