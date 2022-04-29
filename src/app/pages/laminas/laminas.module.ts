import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaminasPageRoutingModule } from './laminas-routing.module';

import { LaminasPage } from './laminas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LaminasPageRoutingModule
  ],
  declarations: [LaminasPage]
})
export class LaminasPageModule {}
