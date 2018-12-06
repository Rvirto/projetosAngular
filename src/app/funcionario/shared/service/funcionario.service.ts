import { Headers, URLSearchParams } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Funcionario } from '../model/Funcionario.model';
import { Apontamento } from '../../../apontamentos/shared/model/Apontamento.model';
import * as moment from 'moment';

export interface ApontamentoFiltro {
  dataInicio: Date;
  dataFim: Date;
}

@Injectable()
export class FuncionarioService {

  private apontamentosURL = 'http://localhost:8080/apontamentos';
  private funcionariosURL = 'http://localhost:8080/funcionarios';

  constructor(
    private http: AuthHttp
  ) { }

  public buscarMeusApontamentos(idFuncionario: number): Promise<Apontamento[]> {
    return this.http.get(`${this.apontamentosURL}/meusApontamentos/${idFuncionario}`)
    .toPromise()
    .then(response => response.json());
  }

  public finalizaApontamento(apontamento: Apontamento): Promise<Apontamento> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.apontamentosURL}`, JSON.stringify(apontamento), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public buscarTodosApontamentos(): Promise<Apontamento[]> {
    return this.http.get(`${this.apontamentosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarApontamento(id: number): Promise<Apontamento> {
    return this.http.get(`${this.apontamentosURL}/${id}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarFuncionario(id: number): Promise<Funcionario> {
    return this.http.get(`${this.funcionariosURL}/${id}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarTodosFuncionario(): Promise<Funcionario[]> {
    return this.http.get(`${this.funcionariosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public atualizarFuncionario(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.funcionariosURL}`, JSON.stringify(funcionario), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public cadastrarFuncionario(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.funcionariosURL}`, JSON.stringify(funcionario), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public buscaPersonalizada(filtro: ApontamentoFiltro): Promise<Apontamento[]> {
    const params = new URLSearchParams();

    if (filtro.dataInicio) {
      params.set('dataInicio',  moment(filtro.dataInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataFim) {
      params.set('dataFim',  moment(filtro.dataFim).format('YYYY-MM-DD'));
    }
    return this.http.get(`${this.apontamentosURL}/busca`,
    { search: params })
    .toPromise()
    .then(response => response.json());
  }
}
