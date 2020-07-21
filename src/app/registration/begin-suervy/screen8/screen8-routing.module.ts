import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Screen8Page } from './screen8.page';

const routes: Routes = [
  {
    path: '',
    component: Screen8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Screen8PageRoutingModule {}
