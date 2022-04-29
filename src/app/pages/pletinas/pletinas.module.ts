import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PletinasPageRoutingModule } from './pletinas-routing.module';

import { PletinasPage } from './pletinas.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PletinasPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [PletinasPage]
})
export class PletinasPageModule {}
