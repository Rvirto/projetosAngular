import { AtividadeService } from './../../atividades/shared/service/atividade.service';
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
  public atividades = [];
  public descricoes: string[] = [];
  public valores: number[] = [];
  public dados: any;
  public apontamentos = [];
  public somaTotal: number;
  public contador: number;
  public id: number;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.carregarFuncionario();
    }
  }

  public carregarFuncionario(): void {
    this.funcionarioService.buscarFuncionario(this.id)
    .then(response => this.funcionario = response)
    .then(() => this.buscarValoresNoBackend())
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao puxas os dados do Funcionário');
    });
  }

  public buscarAtividades(): void {
    this.atividadeService.buscarTodasAtividades()
    .then(response => {
      this.atividades = response;
      for (let i = 0; i < this.atividades.length; i++) {
        this.descricoes.push(this.atividades[i].descricao);
      }
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Atividades!');
    });
  }

  public buscarMeusApontamentos(): void {
      this.funcionarioService.buscarMeusApontamentos(this.id)
      .then(response => {
        this.apontamentos = response;
      })
      .then(() => {
        this.contarHoras();
      })
      .then(() => {
        this.montarGrafico();
      })
      .catch(() => {
        this.toastyService.clearAll();
        this.toastyService.error('Problemas técnicos ao buscar seus Apontamentos!');
      });
  }

  public contarHoras(): void {
    for (let i = 0; i < this.atividades.length; i++) {
      this.somaTotal = 0;
      this.contador = 0;
      for (let j = 0; j < this.apontamentos.length; j++) {
        if (this.apontamentos[j].atividade.id === this.atividades[i].id) {
          this.somaTotal += this.apontamentos[j].quantidadeHoras;
          this.contador++;
        }
      }
      this.somaTotal = this.somaTotal / this.contador;
      this.valores.push(this.somaTotal);
    }
  }

    public buscarValoresNoBackend(): void {
      this.buscarAtividades();
      this.buscarMeusApontamentos();
    }

    public montarGrafico() {
      this.dados = {
        labels: this.descricoes,
        datasets: [
            {
                data: this.valores,
                backgroundColor: [
                  '#993399',
                  '#36A2EB',
                  '#FFCE56',
                  'green',
                  'red',
                  'fuchsia',
                  '#FF6384'
                ],
                hoverBackgroundColor: [
                  '#993399',
                  '#36A2EB',
                  '#FFCE56',
                  'green',
                  'red',
                  'fuchsia',
                  '#FF6384'
                ]
            }]
        };
    }
}
