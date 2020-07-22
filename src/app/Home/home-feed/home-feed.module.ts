import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeFeedPage } from './home-feed.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomeFeedPageRoutingModule } from './home-feedrouting.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeFeedPageRoutingModule
  ],
  declarations: [
    HomeFeedPage,
    HeaderComponent
  ]
})
export class HomeFeedPageModule {}
