import { ToastyService } from 'ng2-toasty';
import { AtividadeService } from './../shared/service/atividade.service';
import { Atividades } from './../shared/model/Atividade.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-atividades',
  templateUrl: './relatorio-atividades.component.html',
  styleUrls: ['./relatorio-atividades.component.css']
})
export class RelatorioAtividadesComponent implements OnInit {

  public atividades: Atividades[] = [];

  constructor(
    private atividadeService: AtividadeService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.buscarAtividades();
  }

  public buscarAtividades(): void {
    this.atividadeService.buscarTodasAtividades()
    .then(response => this.atividades = response)
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar atividades!');
    });
  }
}
