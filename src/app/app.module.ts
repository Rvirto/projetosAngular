import { FuncionarioModule } from './funcionario/funcionario.module';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { BarraModule } from './barra/barra.module';
import { ToastyModule } from 'ng2-toasty';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginModule } from './login/login.module';
import { JwtHelper } from 'angular2-jwt';
import { AtividadesModule } from './atividades/atividades.module';
import { ApontamentosModule } from './apontamentos/apontamentos.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastyModule.forRoot(),
    BarraModule,
    LoginModule,
    RoutingModule,
    PaginaInicialModule,
    BrowserAnimationsModule,
    AtividadesModule,
    ApontamentosModule,
    FuncionarioModule
  ],
  providers: [
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
