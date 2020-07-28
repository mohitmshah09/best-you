import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPage } from './event.page';

const routes: Routes = [
  {
    path: '',
    component: EventPage,
    children:[
      {
        path: 'featured',
        loadChildren: () => import('../../event/featured/featured.module').then( m => m.FeaturedPageModule)
      },
      {
        path: 'going',
        loadChildren: () => import('../../event/going/going.module').then( m => m.GoingPageModule)
      },
      {
        path: 'intrested',
        loadChildren: () => import('../../event/intrested/intrested.module').then( m => m.IntrestedPageModule)
      },
      {
        path: '',
        redirectTo: '/home/event/event/featured',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '/home/event/event/featured',
    loadChildren: () => import('../../event/featured/featured.module').then( m => m.FeaturedPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventPageRoutingModule {}
