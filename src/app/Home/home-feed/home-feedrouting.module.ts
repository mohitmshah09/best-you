import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFeedPage } from './home-feed.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFeedPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFeedPageRoutingModule {}
