import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewestPageRoutingModule } from './newest-routing.module';

import { NewestPage } from './newest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewestPageRoutingModule
  ],
  declarations: [NewestPage]
})
export class NewestPageModule {}
