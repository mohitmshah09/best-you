import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Screen5PageRoutingModule } from './screen5-routing.module';

import { Screen5Page } from './screen5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Screen5PageRoutingModule
  ],
  declarations: [Screen5Page]
})
export class Screen5PageModule {}
