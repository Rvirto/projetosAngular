import { LoginService } from './../../login/shared/service/login.service';
import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../../login/shared/service/logout.service';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { Atividades } from '../../atividades/shared/model/Atividade.model';
import { AtividadeService } from '../../atividades/shared/service/atividade.service';

@Component({
  selector: 'app-pagina-barra',
  templateUrl: './pagina-barra.component.html',
  styleUrls: ['./pagina-barra.component.css']
})
export class PaginaBarraComponent implements OnInit {

public menu: boolean;
public menuRelatorio: boolean;
public isCollapsed: boolean = true;
public abrirDialogAtividade: boolean;
public atividade: Atividades = new Atividades();

  constructor(
    private loginService: LoginService,
    private logoutservice: LogoutService,
    private toastyService: ToastyService,
    private route: Router,
    private atividadeService: AtividadeService
  ) { }

  ngOnInit() {
  }

  public abrirMenu(): void {
    this.menu = true;
  }

  public fecharMenu(): void {
    this.menu = false;
  }

  public abrirMenuRelatorio(): void {
    this.menuRelatorio = true;
  }

  public fecharMenuRelatorio(): void {
    this.menuRelatorio = false;
  }

  public fazerLogout(): void {
    this.logoutservice.logout()
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Obrigado pelo acesso! Volte sempre!');
      this.route.navigate(['/']);
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao finalizar seu Acesso!');
    });
  }

  public abrirDialog(): void {
    this.fecharMenu();
    this.abrirDialogAtividade = true;
  }

  public fecharDialog(): void {
    this.abrirDialogAtividade = false;
  }

  public cadastrarAtividade(): void {
    this.atividadeService.cadastrarAtividade(this.atividade)
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Atividade criada com Sucesso!');
      this.fecharDialog();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao salvar nova Atividade!');
    });
  }
}
