import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen7PageRoutingModule } from './screen7-routing.module';

import { Screen7Page } from './screen7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen7PageRoutingModule
  ],
  declarations: [Screen7Page]
})
export class Screen7PageModule {}
