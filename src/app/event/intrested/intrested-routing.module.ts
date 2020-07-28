import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntrestedPage } from './intrested.page';

const routes: Routes = [
  {
    path: '',
    component: IntrestedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntrestedPageRoutingModule {}
