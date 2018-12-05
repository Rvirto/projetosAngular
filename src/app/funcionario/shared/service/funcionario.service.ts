import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Funcionario } from '../model/Funcionario.model';
import { Apontamento } from '../../../apontamentos/shared/model/Apontamento.model';

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
}
