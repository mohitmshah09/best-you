import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesListPageRoutingModule } from './courses-list-routing.module';

import { CoursesListPage } from './courses-list.page';
import { HeaderComponent } from '../../../home/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesListPageRoutingModule
  ],
  declarations: [
    CoursesListPage,
    HeaderComponent
  ]
})
export class CoursesListPageModule {}
