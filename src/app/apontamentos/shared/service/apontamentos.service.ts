import { AuthHttp } from 'angular2-jwt';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Apontamento } from '../model/Apontamento.model';

@Injectable()
export class ApontamentosService {

  private apontamentoURL = 'http://localhost:8080/apontamentos';

  constructor(
    private http: AuthHttp
  ) { }

  public cadastrarApontamento(apontamento: Apontamento): Promise<Apontamento> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.apontamentoURL}`, JSON.stringify(apontamento), { headers })
    .toPromise()
    .then(response => response.json());
  }
}
