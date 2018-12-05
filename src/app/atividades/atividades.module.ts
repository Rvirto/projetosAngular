import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialAtividadesComponent } from './inicial-atividades/inicial-atividades.component';
import { AtividadeService } from './shared/service/atividade.service';
import { RelatorioAtividadesComponent } from './relatorio-atividades/relatorio-atividades.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [InicialAtividadesComponent, RelatorioAtividadesComponent],
  exports: [InicialAtividadesComponent, RelatorioAtividadesComponent],
  providers: [AtividadeService]
})
export class AtividadesModule { }
