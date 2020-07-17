import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
      },
    ])
  ]
})
export class RegistrationModule { }
