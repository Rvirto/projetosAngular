import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/Funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-funcionarios',
  templateUrl: './relatorio-funcionarios.component.html',
  styleUrls: ['./relatorio-funcionarios.component.css']
})
export class RelatorioFuncionariosComponent implements OnInit {

  public funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.buscarFuncionarios();
  }

  public buscarFuncionarios(): void {
    this.funcionarioService.buscarTodosFuncionario()
    .then(response => this.funcionarios = response)
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Funcionários!');
    });
  }
}
