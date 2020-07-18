import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPswCodePageRoutingModule } from './forgot-psw-code-routing.module';

import { ForgotPswCodePage } from './forgot-psw-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPswCodePageRoutingModule
  ],
  declarations: [ForgotPswCodePage]
})
export class ForgotPswCodePageModule {}
