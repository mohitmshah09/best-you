import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen3PageRoutingModule } from './screen3-routing.module';

import { Screen3Page } from './screen3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Screen3PageRoutingModule
  ],
  declarations: [Screen3Page]
})
export class Screen3PageModule {}
