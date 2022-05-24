import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';
import { ContactosCelListComponent } from './contactos-cel-list/contactos-cel-list.component';
import { ContactosComponent } from './contactos/contactos.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderBackComponent } from './header-back/header-back.component';
import { FooterComponent } from './footer/footer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Footer2Component } from './footer2/footer2.component';
import { BaseMaterialListComponent } from './base-material-list/base-material-list.component';
import { AngulosListComponent } from './angulos-list/angulos-list.component';
import { SedesListComponent } from './sedes-list/sedes-list.component';



@NgModule({
  declarations: [HeaderComponent,
    HeaderBackComponent,
    OfertasComponent,
    CategoriasListComponent,
    ContactosCelListComponent,
    ContactosComponent,
    FooterComponent,
    Footer2Component,
    BaseMaterialListComponent,
    AngulosListComponent,
    SedesListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    NgxDatatableModule
  ],
  exports: [
    HeaderComponent,
    HeaderBackComponent,
    OfertasComponent,
    CategoriasListComponent,
    ContactosCelListComponent,
    ContactosComponent,
    FooterComponent,
    Footer2Component,
    BaseMaterialListComponent,
    AngulosListComponent,
    SedesListComponent



  ]
})
export class ComponentsModule { }
