import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialApontamentosComponent } from './inicial-apontamentos/inicial-apontamentos.component';
import { ApontamentosService } from './shared/service/apontamentos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InicialApontamentosComponent],
  exports: [InicialApontamentosComponent],
  providers: [ApontamentosService]
})
export class ApontamentosModule { }
