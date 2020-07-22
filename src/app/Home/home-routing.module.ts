import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () => import('./home-feed/home-feed.module').then(m => m.HomeFeedPageModule)
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.EventPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
      },
      {
        path: 'more',
        loadChildren: () => import('./more/more.module').then( m => m.MorePageModule)
      },
      {
        path: '',
        redirectTo: '/home/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/feed',
    pathMatch: 'full'
  },
 
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
