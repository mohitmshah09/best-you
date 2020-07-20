import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen7Page } from './screen7.page';

const routes: Routes = [
  {
    path: '',
    component: Screen7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen7PageRoutingModule {}
