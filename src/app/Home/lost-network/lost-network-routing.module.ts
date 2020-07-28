import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostNetworkPage } from './lost-network.page';

const routes: Routes = [
  {
    path: '',
    component: LostNetworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LostNetworkPageRoutingModule {}
