import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen6Page } from './screen6.page';

const routes: Routes = [
  {
    path: '',
    component: Screen6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen6PageRoutingModule {}
