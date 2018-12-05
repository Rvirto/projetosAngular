import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaInicialComponent],
  exports: [PaginaInicialComponent]
})
export class PaginaInicialModule { }
