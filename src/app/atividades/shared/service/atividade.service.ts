import { Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Atividades } from '../model/Atividade.model';

@Injectable()
export class AtividadeService {

  private atividadeURL = 'http://localhost:8080/atividades';

  constructor(
    private http: AuthHttp
  ) { }

  public buscarTodasAtividades(): Promise<Atividades[]> {
    return this.http.get(`${this.atividadeURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public cadastrarAtividade(atividade: Atividades): Promise<Atividades> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.atividadeURL}`, JSON.stringify(atividade), { headers })
    .toPromise()
    .then(response => response.json());
  }
}
