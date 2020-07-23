import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditWorkPage } from './edit-work.page';

const routes: Routes = [
  {
    path: '',
    component: EditWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditWorkPageRoutingModule {}
