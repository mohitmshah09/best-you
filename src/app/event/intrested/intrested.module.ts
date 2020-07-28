import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntrestedPageRoutingModule } from './intrested-routing.module';

import { IntrestedPage } from './intrested.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntrestedPageRoutingModule
  ],
  declarations: [IntrestedPage]
})
export class IntrestedPageModule {}
