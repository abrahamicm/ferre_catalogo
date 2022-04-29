import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigasPageRoutingModule } from './vigas-routing.module';

import { VigasPage } from './vigas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VigasPage]
})
export class VigasPageModule {}
