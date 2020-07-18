import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPswPageRoutingModule } from './forgot-psw-routing.module';

import { ForgotPswPage } from './forgot-psw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ForgotPswPageRoutingModule
  ],
  declarations: [ForgotPswPage]
})
export class ForgotPswPageModule {}
