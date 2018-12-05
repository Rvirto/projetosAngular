import { LoginService } from './../../login/shared/service/login.service';
import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Apontamento } from '../../apontamentos/shared/model/Apontamento.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-apontamento',
  templateUrl: './detalhes-apontamento.component.html',
  styleUrls: ['./detalhes-apontamento.component.css']
})
export class DetalhesApontamentoComponent implements OnInit {

  public apontamento: Apontamento = new Apontamento();

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarApontamento(id);
    }
  }

  public carregarApontamento(id: number): void {
    this.funcionarioService.buscarApontamento(id)
    .then(response => this.apontamento = response)
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao carregar Apontamento!');
    });
  }
}
