import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apontamentos-gestor',
  templateUrl: './apontamentos-gestor.component.html',
  styleUrls: ['./apontamentos-gestor.component.css']
})
export class ApontamentosGestorComponent implements OnInit {

  public apontamentos = [];
  public dataInicio: Date;
  public dataFim: Date;

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.buscarTodosApontamentos();
  }

  public buscarTodosApontamentos(): void {
    this.funcionarioService.buscarTodosApontamentos()
    .then(response => {
      this.apontamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao fazer a busca dos Apontamentos!');
    });
  }

  public buscaFiltro(): void {
    this.funcionarioService
    .buscaPersonalizada({dataInicio: this.dataInicio, dataFim: this.dataFim})
    .then(response => {
      this.apontamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao fazer filtragem dos Dados!');
    });
  }
}
