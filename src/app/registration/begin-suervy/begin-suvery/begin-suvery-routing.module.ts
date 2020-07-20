import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeginSuveryPage } from './begin-suvery.page';

const routes: Routes = [
  {
    path: '',
    component: BeginSuveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeginSuveryPageRoutingModule {}
