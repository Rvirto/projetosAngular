import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/Funcionario.model';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/shared/service/login.service';

@Component({
  selector: 'app-relatorio-funcionarios',
  templateUrl: './relatorio-funcionarios.component.html',
  styleUrls: ['./relatorio-funcionarios.component.css']
})
export class RelatorioFuncionariosComponent implements OnInit {

  public funcionarios: Funcionario[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService,
    private loginService: LoginService
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
