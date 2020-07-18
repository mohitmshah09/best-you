import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetSuccessfullPageRoutingModule } from './reset-successfull-routing.module';

import { ResetSuccessfullPage } from './reset-successfull.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetSuccessfullPageRoutingModule
  ],
  declarations: [ResetSuccessfullPage]
})
export class ResetSuccessfullPageModule {}
