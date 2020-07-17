import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPagePage } from './landing-page/landing-page.page';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'landing-page',
        pathMatch: 'full'
      },
      {
        path: 'landing-page',
        loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPagePageModule)
      },
    ])
  ]
})
export class RegistrationModule { }
