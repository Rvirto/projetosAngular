import { ToastyService } from 'ng2-toasty';
import { LoginService } from './../../login/shared/service/login.service';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/Funcionario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  public funcionario: Funcionario = new Funcionario();
  public senha: string;

  constructor(
    private funcionarioService: FuncionarioService,
    private loginService: LoginService,
    private toastyService: ToastyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarFuncionario();
  }

  public buscarFuncionario(): void {
    this.funcionarioService.buscarFuncionario(this.loginService.jwtPayLoad.idFun)
    .then(response => this.funcionario = response)
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Seus Dados!');
    });
  }

  public atualizarDados(): void {
    if (this.funcionario.senha === this.senha) {
      this.funcionarioService.atualizarFuncionario(this.funcionario)
      .then(() => {
        this.toastyService.clearAll();
        this.toastyService.success('Seus Dados foram Atualizados!');
        this.router.navigate(['/dashboardFuncionario']);
      })
      .catch(() => {
        this.toastyService.clearAll();
        this.toastyService.error('Problemas técnicos ao Atualizar Seus Dados!');
      });
    } else {
      this.toastyService.clearAll();
      this.toastyService.warning('As senhas não conferem, por favor verifique e tente novamente!');
    }
  }
}
