import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen6PageRoutingModule } from './screen6-routing.module';

import { Screen6Page } from './screen6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Screen6PageRoutingModule
  ],
  declarations: [Screen6Page]
})
export class Screen6PageModule {}
