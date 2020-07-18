import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPswCodePage } from './forgot-psw-code.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPswCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPswCodePageRoutingModule {}
