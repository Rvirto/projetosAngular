import { LoginService } from './../../login/shared/service/login.service';
import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Apontamento } from '../../apontamentos/shared/model/Apontamento.model';
import { AtividadeService } from '../../atividades/shared/service/atividade.service';
import { ApontamentosService } from '../../apontamentos/shared/service/apontamentos.service';

@Component({
  selector: 'app-meus-apontamentos',
  templateUrl: './meus-apontamentos.component.html',
  styleUrls: ['./meus-apontamentos.component.css']
})
export class MeusApontamentosComponent implements OnInit {

  public apontamentos = [];
  public abrirDialog: boolean;
  public atividades: any;
  public apontamento: Apontamento = new Apontamento();

  constructor(
    private loginService: LoginService,
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService,
    private atividadeService: AtividadeService,
    private apontamentoService: ApontamentosService
  ) { }

  ngOnInit() {
    this.buscarMeusApontamentos();
    this.buscarAtividade();
  }

  public buscarMeusApontamentos(): void {
    this.funcionarioService.buscarMeusApontamentos(this.loginService.jwtPayLoad.idFun)
    .then(response => {
      this.apontamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar seus Apontamentos!');
    });
  }

  public finalizaApontamento(apontamento: Apontamento): void {
    this.funcionarioService.finalizaApontamento(apontamento)
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Atividade Finalizada Com Sucesso!');
      this.buscarMeusApontamentos();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao Finalizar Atividade!');
    });
  }

  public buscarAtividade(): void {
    this.atividadeService.buscarTodasAtividades()
    .then(response => this.atividades = response.map(resp => {
      return {label: resp.descricao, value: resp.id};
    }))
    .catch(() => {
    this.toastyService.clearAll();
    this.toastyService.error('Problemas técnicos ao buscar as Atividades!');
    });
  }

  public abrirDialogAtividade(): void {
    this.abrirDialog = true;
  }

  public fecharDialog(): void {
    this.abrirDialog = false;
  }

  public cadastrarAtividade(): void {
    this.apontamento.funcionario.id = this.loginService.jwtPayLoad.idFun;
    this.apontamentoService.cadastrarApontamento(this.apontamento)
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Atividade cadastrada com Sucesso!');
      this.fecharDialog();
      this.buscarMeusApontamentos();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao cadastrar Atividade!');
    });
  }
}
