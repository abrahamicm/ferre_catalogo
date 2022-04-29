import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatatablePageRoutingModule } from './datatable-routing.module';

import { DatatablePage } from './datatable.page';
import  {NgxDatatableModule}  from '@swimlane/ngx-datatable';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatatablePageRoutingModule,
    NgxDatatableModule,
    ComponentsModule
  ],
  declarations: [DatatablePage],
  
})
export class DatatablePageModule {}
