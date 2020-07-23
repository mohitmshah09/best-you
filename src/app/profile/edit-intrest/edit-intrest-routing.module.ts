import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditIntrestPage } from './edit-intrest.page';

const routes: Routes = [
  {
    path: '',
    component: EditIntrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditIntrestPageRoutingModule {}
