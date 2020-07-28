import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LostNetworkPageRoutingModule } from './lost-network-routing.module';

import { LostNetworkPage } from './lost-network.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LostNetworkPageRoutingModule
  ],
  declarations: [LostNetworkPage]
})
export class LostNetworkPageModule {}
