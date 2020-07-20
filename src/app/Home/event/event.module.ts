import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventPage } from './event.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { EventPageRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EventPageRoutingModule
  ],
  declarations: [EventPage]
})
export class EventPageModule {}
