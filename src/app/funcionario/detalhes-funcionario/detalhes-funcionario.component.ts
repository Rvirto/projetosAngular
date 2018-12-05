import { Funcionario } from './../shared/model/Funcionario.model';
import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-funcionario',
  templateUrl: './detalhes-funcionario.component.html',
  styleUrls: ['./detalhes-funcionario.component.css']
})
export class DetalhesFuncionarioComponent implements OnInit {

  public funcionario: Funcionario = new Funcionario();

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.carregarFuncionario(id);
    }
  }

  public carregarFuncionario(id: number): void {
    this.funcionarioService.buscarFuncionario(id)
    .then(response => this.funcionario = response)
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao puxas os dados do Funcionário');
    });
  }
}
