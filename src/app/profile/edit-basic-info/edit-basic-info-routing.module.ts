import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBasicInfoPage } from './edit-basic-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditBasicInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBasicInfoPageRoutingModule {}
