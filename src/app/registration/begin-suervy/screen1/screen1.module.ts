import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen1PageRoutingModule } from './screen1-routing.module';

import { Screen1Page } from './screen1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Screen1PageRoutingModule
  ],
  declarations: [Screen1Page]
})
export class Screen1PageModule {}
