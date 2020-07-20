import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen5Page } from './screen5.page';

const routes: Routes = [
  {
    path: '',
    component: Screen5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen5PageRoutingModule {}
