import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AngulosPageRoutingModule } from './angulos-routing.module';

import { AngulosPage } from './angulos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AngulosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AngulosPage]
})
export class AngulosPageModule {}
