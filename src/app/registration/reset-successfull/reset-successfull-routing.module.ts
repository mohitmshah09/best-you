import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetSuccessfullPage } from './reset-successfull.page';

const routes: Routes = [
  {
    path: '',
    component: ResetSuccessfullPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetSuccessfullPageRoutingModule {}
