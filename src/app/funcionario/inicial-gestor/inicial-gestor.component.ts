import { FuncionarioService } from './../shared/service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { AtividadeService } from '../../atividades/shared/service/atividade.service';

@Component({
  selector: 'app-inicial-gestor',
  templateUrl: './inicial-gestor.component.html',
  styleUrls: ['./inicial-gestor.component.css']
})
export class InicialGestorComponent implements OnInit {

  public atividades = [];
  public descricoes: string[] = [];
  public valores: number[] = [];
  public dados: any;
  public dadosT: any;
  public apontamentos = [];
  public somaTotal: number;
  public contador: number;
  public totalHoras: number[] = [];

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService,
    private atividadeService: AtividadeService
  ) {}

  ngOnInit() {
    this.buscarValoresNoBackend();
  }

  public buscarAtividades(): void {
    this.atividadeService.buscarTodasAtividades()
    .then(response => {
      this.atividades = response;
      for (let i = 0; i < this.atividades.length; i++) {
        this.descricoes.push(this.atividades[i].descricao);
        this.totalHoras.push(this.atividades[i].totalHoras);
      }
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Atividades!');
    });
  }

  public buscarMeusApontamentos(): void {
    this.funcionarioService.buscarTodosApontamentos()
    .then(response => {
      this.apontamentos = response;
    })
    .then(() => {
      this.contarHoras();
    })
    .then(() => {
      this.montarGrafico();
      this.montarGraficoTotal();
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
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'red',
                    'fuchsia',
                    '#993399'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'red',
                    'fuchsia',
                    '#993399'
                ]
            }]
        };
    }

    public montarGraficoTotal(): void {
      this.dadosT = {
        labels: this.descricoes,
        datasets: [
            {
                data: this.totalHoras,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'red',
                    'fuchsia',
                    '#993399'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    'green',
                    'red',
                    'fuchsia',
                    '#993399'
                ]
            }]
        };
    }

}
