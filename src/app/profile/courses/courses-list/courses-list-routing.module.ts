import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesListPage } from './courses-list.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesListPage,
    children:[
      {
        path: 'featured',
        loadChildren: () => import('../../../profile/courses/featured/featured.module').then( m => m.FeaturedPageModule)
      },
      {
        path: 'most-popular',
        loadChildren: () => import('../../../profile/courses/most-popular/most-popular.module').then( m => m.MostPopularPageModule)
      },
      {
        path: 'newest',
        loadChildren: () => import('../../../profile/courses/newest/newest.module').then( m => m.NewestPageModule)
      },
      {
        path: '',
        redirectTo: '/home/profile/courses-list/featured',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/profile/courses-list/featured',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesListPageRoutingModule {}
