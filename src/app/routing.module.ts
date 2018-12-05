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


const routes: Routes = [

  {path: '', component: PaginaInicialComponent},
  {path: 'login', component: InicialLoginComponent},
  {path: 'meusApontamentos', component: MeusApontamentosComponent},
  {path: 'dashboardFuncionario', component: InicialFuncionarioComponent},
  {path: 'meusDados', component: MeusDadosComponent},
  {path: 'dashboardGestor', component: InicialGestorComponent},
  {path: 'apontamentos', component: ApontamentosGestorComponent},
  {path: 'detalhesApontamento/:id', component: DetalhesApontamentoComponent},
  {path: 'cadastroFuncionario', component: CadastroFuncionarioComponent},
  {path: 'relatorioFuncionario', component: RelatorioFuncionariosComponent},
  {path: 'relatorioAtividades', component: RelatorioAtividadesComponent},
  {path: 'detalhesFuncionario/:id', component: DetalhesFuncionarioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
