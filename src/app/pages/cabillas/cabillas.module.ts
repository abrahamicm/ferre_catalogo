import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabillasPageRoutingModule } from './cabillas-routing.module';

import { CabillasPage } from './cabillas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabillasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CabillasPage]
})
export class CabillasPageModule {}
