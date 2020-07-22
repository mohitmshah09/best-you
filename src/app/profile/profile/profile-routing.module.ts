import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children:[
      {
        path: 'profile-detail',
        loadChildren: () => import('../profile-detail/profile-detail.module').then( m => m.ProfileDetailPageModule)
      },
      {
        path: 'network',
        loadChildren: () => import('../network/network.module').then( m => m.NetworkPageModule)
      },
      {
        path: 'courses',
        loadChildren: () => import('../courses/courses/courses.module').then( m => m.CoursesPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../contact/contact/contact.module').then( m => m.ContactPageModule)
      },
      {
        path: '',
        redirectTo: '/home/profile/profile/profile-detail',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/profile/profile/profile-detail',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
