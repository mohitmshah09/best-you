import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeginSuveryPageRoutingModule } from './begin-suvery-routing.module';

import { BeginSuveryPage } from './begin-suvery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeginSuveryPageRoutingModule
  ],
  declarations: [BeginSuveryPage]
})
export class BeginSuveryPageModule {}
