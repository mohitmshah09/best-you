import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesDetailPageRoutingModule } from './courses-detail-routing.module';

import { CoursesDetailPage } from './courses-detail.page';
import { HeaderComponent } from 'src/app/home/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesDetailPageRoutingModule
  ],
  declarations: [
    CoursesDetailPage,
    HeaderComponent
  ]
})
export class CoursesDetailPageModule {}
