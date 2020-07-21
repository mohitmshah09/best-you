import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen8PageRoutingModule } from './screen8-routing.module';

import { Screen8Page } from './screen8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Screen8PageRoutingModule
  ],
  declarations: [Screen8Page]
})
export class Screen8PageModule {}
