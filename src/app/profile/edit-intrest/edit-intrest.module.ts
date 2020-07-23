import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditIntrestPageRoutingModule } from './edit-intrest-routing.module';

import { EditIntrestPage } from './edit-intrest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditIntrestPageRoutingModule
  ],
  declarations: [EditIntrestPage]
})
export class EditIntrestPageModule {}
