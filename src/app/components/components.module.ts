import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListaPreciosComponent } from './lista-precios/lista-precios.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';

import { ContactosCelListComponent } from './contactos-cel-list/contactos-cel-list.component';
import { ContactosComponent } from './contactos/contactos.component';

import { IonicModule } from '@ionic/angular';  
import {RouterModule} from '@angular/router';
import { HeaderBackComponent } from './header-back/header-back.component';
import { FooterComponent } from './footer/footer.component';
import  {NgxDatatableModule}  from '@swimlane/ngx-datatable';
import { NgxTableBootstrapComponent } from './ngx-table-bootstrap/ngx-table-bootstrap.component';
import { LaminasListComponent } from './laminas-list/laminas-list.component';
import { Footer2Component } from './footer2/footer2.component';
import { BaseMaterialListComponent } from './base-material-list/base-material-list.component';
import { AngulosListComponent } from './angulos-list/angulos-list.component';
import { CabillasListComponent } from './cabillas-list/cabillas-list.component';
import { OfertasListComponent } from './ofertas-list/ofertas-list.component';
import { PletinasListComponent } from './pletinas-list/pletinas-list.component';
import { TubosEstructuralesListComponent } from './tubos-estructurales-list/tubos-estructurales-list.component';
import { TubosHpListComponent } from './tubos-hp-list/tubos-hp-list.component';
import { VigasListComponent } from './vigas-list/vigas-list.component';



@NgModule({
  declarations: [HeaderComponent,
    HeaderBackComponent,
    ListaPreciosComponent,
    OfertasComponent,
    CategoriasListComponent,
    ContactosCelListComponent,
    ContactosComponent,
    FooterComponent,
    NgxTableBootstrapComponent,
    LaminasListComponent,
    Footer2Component,
    BaseMaterialListComponent,
    AngulosListComponent,
    CabillasListComponent,
    OfertasListComponent,
    PletinasListComponent,
    TubosEstructuralesListComponent,
    TubosHpListComponent,
    VigasListComponent
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    NgxDatatableModule

    
  ],
  exports:[
    HeaderComponent,
    HeaderBackComponent,
    ListaPreciosComponent,
    OfertasComponent,
    CategoriasListComponent,
    ContactosCelListComponent,
    ContactosComponent,
    FooterComponent,
    NgxTableBootstrapComponent,
    LaminasListComponent,
    Footer2Component,
    BaseMaterialListComponent,
    AngulosListComponent,
    CabillasListComponent,
    OfertasListComponent,
    PletinasListComponent,
    TubosEstructuralesListComponent,
    TubosHpListComponent,
    VigasListComponent
    
    

  ]
})
export class ComponentsModule { }
