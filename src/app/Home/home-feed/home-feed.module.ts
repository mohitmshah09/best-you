import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeFeedPage } from './home-feed.page';

import { HomeFeedPageRoutingModule } from './home-feedrouting.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeFeedPageRoutingModule
  ],
  declarations: [
    HomeFeedPage,
    HeaderComponent
  ]
})
export class HomeFeedPageModule {}
