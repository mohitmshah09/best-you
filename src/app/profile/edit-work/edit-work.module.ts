import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditWorkPageRoutingModule } from './edit-work-routing.module';

import { EditWorkPage } from './edit-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditWorkPageRoutingModule
  ],
  declarations: [EditWorkPage]
})
export class EditWorkPageModule {}
