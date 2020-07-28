import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventPage } from './event.page';

import { EventPageRoutingModule } from './event-routing.module';
import { HeaderComponent } from '../../home/header/header.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EventPageRoutingModule
  ],
  declarations: [
    EventPage,
    HeaderComponent
  ]
})
export class EventPageModule {}
