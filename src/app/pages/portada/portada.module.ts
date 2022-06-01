import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PortadaPage]
})
export class PortadaPageModule { }
