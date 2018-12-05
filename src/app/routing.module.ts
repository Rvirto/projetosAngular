import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial/pagina-inicial.component';
import { InicialLoginComponent } from './login/inicial-login/inicial-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeusApontamentosComponent } from './funcionario/meus-apontamentos/meus-apontamentos.component';
import { InicialFuncionarioComponent } from './funcionario/inicial-funcionario/inicial-funcionario.component';
import { MeusDadosComponent } from './funcionario/meus-dados/meus-dados.component';
import { InicialGestorComponent } from './funcionario/inicial-gestor/inicial-gestor.component';
import { ApontamentosGestorComponent } from './funcionario/apontamentos-gestor/apontamentos-gestor.component';
import { DetalhesApontamentoComponent } from './funcionario/detalhes-apontamento/detalhes-apontamento.component';
import { CadastroFuncionarioComponent } from './funcionario/cadastro-funcionario/cadastro-funcionario.component';
import { RelatorioFuncionariosComponent } from './funcionario/relatorio-funcionarios/relatorio-funcionarios.component';
import { RelatorioAtividadesComponent } from './atividades/relatorio-atividades/relatorio-atividades.component';
import { DetalhesFuncionarioComponent } from './funcionario/detalhes-funcionario/detalhes-funcionario.component';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [

  {path: '', component: PaginaInicialComponent},
  {path: 'login', component: InicialLoginComponent},
  {path: 'meusApontamentos', component: MeusApontamentosComponent,
   canActivate: [AuthGuard], data: {roles: ['COMUM']}},
  {path: 'dashboardFuncionario', component: InicialFuncionarioComponent,
   canActivate: [AuthGuard], data: {roles: ['COMUM']}},
  {path: 'meusDados', component: MeusDadosComponent,
   canActivate: [AuthGuard], data: {roles: ['COMUM', 'GESTOR']}},
  {path: 'dashboardGestor', component: InicialGestorComponent,
   canActivate: [AuthGuard], data: {roles: ['GESTOR']}},
  {path: 'apontamentos', component: ApontamentosGestorComponent,
    canActivate: [AuthGuard], data: {roles: ['GESTOR']}},
  {path: 'detalhesApontamento/:id', component: DetalhesApontamentoComponent,
   canActivate: [AuthGuard], data: {roles: ['GESTOR', 'COMUM']}},
  {path: 'cadastroFuncionario', component: CadastroFuncionarioComponent,
  canActivate: [AuthGuard], data: {roles: ['GESTOR']}},
  {path: 'relatorioFuncionario', component: RelatorioFuncionariosComponent,
   canActivate: [AuthGuard], data: {roles: ['GESTOR']}},
  {path: 'relatorioAtividades', component: RelatorioAtividadesComponent,
  canActivate: [AuthGuard], data: {roles: ['GESTOR']}},
  {path: 'detalhesFuncionario/:id', component: DetalhesFuncionarioComponent,
   canActivate: [AuthGuard], data: {roles: ['GESTOR']}}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
