import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaBarraComponent } from './pagina-barra/pagina-barra.component';
import {SidebarModule} from 'primeng/sidebar';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    CollapseModule.forRoot(),
     BsDropdownModule.forRoot(),
     DialogModule,
     InputTextModule,
     FormsModule
  ],
  declarations: [PaginaBarraComponent],
  exports: [PaginaBarraComponent]
})
export class BarraModule { }
