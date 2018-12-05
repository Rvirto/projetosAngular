import { ToastyService } from 'ng2-toasty';
import { FuncionarioService } from './../shared/service/funcionario.service';
import { Funcionario } from './../shared/model/Funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  public funcionario: Funcionario = new Funcionario();
  public senha: string;

  constructor(
    private funcionarioService: FuncionarioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
  }

  public cadastrarFuncionario(): void {
    if (this.funcionario.senha === this.senha) {
      this.funcionarioService.cadastrarFuncionario(this.funcionario)
      .then(() => {
        this.toastyService.clearAll();
        this.toastyService.success('Cadastro Realizado com Sucesso!');
        this.funcionario = new Funcionario();
        this.senha = '';
      })
      .catch(() => {
        this.toastyService.clearAll();
        this.toastyService.error('Problemas técnicos ao Cadastrar Funcionário!');
      });
    } else {
      this.toastyService.clearAll();
      this.toastyService.warning('As senhas não conferem, tente novamente!');
    }
  }
}
