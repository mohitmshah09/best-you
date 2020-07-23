import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditAboutPageRoutingModule } from './edit-about-routing.module';

import { EditAboutPage } from './edit-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAboutPageRoutingModule
  ],
  declarations: [EditAboutPage]
})
export class EditAboutPageModule {}
