import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit-about',
        loadChildren: () => import('../profile/edit-about/edit-about.module').then( m => m.EditAboutPageModule)
      },
      {
        path: 'edit-basic-info',
        loadChildren: () => import('../profile/edit-basic-info/edit-basic-info.module').then( m => m.EditBasicInfoPageModule)
      },
      {
        path: 'edit-work',
        loadChildren: () => import('../profile/edit-work/edit-work.module').then( m => m.EditWorkPageModule)
      },
      {
        path: 'edit-intrest',
        loadChildren: () => import('../profile/edit-intrest/edit-intrest.module').then( m => m.EditIntrestPageModule)
      },
      {
        path: 'edit-contact',
        loadChildren: () => import('../profile/contact/edit-contact/edit-contact.module').then( m => m.EditContactPageModule)
      }
    ])
  ]
})
export class ProfileModule { }
