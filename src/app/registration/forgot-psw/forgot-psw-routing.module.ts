import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPswPage } from './forgot-psw.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPswPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPswPageRoutingModule {}
