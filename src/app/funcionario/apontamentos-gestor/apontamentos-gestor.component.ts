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

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.buscarTodosApontamentos();
  }

  public buscarTodosApontamentos() {
    this.funcionarioService.buscarTodosApontamentos()
    .then(response => {
      this.apontamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao fazer a busca dos Apontamentos!');
    });
  }
}
