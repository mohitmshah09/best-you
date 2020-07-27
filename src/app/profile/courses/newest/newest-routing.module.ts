import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewestPage } from './newest.page';

const routes: Routes = [
  {
    path: '',
    component: NewestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewestPageRoutingModule {}
