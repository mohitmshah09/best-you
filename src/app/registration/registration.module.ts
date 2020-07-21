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
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'forgot-psw',
        loadChildren: () => import('./forgot-psw/forgot-psw.module').then( m => m.ForgotPswPageModule)
      },
      {
        path:'forgot-psw-code',
        loadChildren:()=>import('./forgot-psw-code/forgot-psw-code.module').then(m=>m.ForgotPswCodePageModule)
      },
      {
        path: 'reset-successfull',
        loadChildren: () => import('./reset-successfull/reset-successfull.module').then( m => m.ResetSuccessfullPageModule)
      },
      {
        path: 'begin-suvery',
        loadChildren: () => import('./begin-suervy/begin-suvery/begin-suvery.module').then( m => m.BeginSuveryPageModule)
      },
      {
        path: 'screen1',
        loadChildren: () => import('./begin-suervy/screen1/screen1.module').then( m => m.Screen1PageModule)
      },
      {
        path: 'screen2',
        loadChildren: () => import('./begin-suervy/screen2/screen2.module').then( m => m.Screen2PageModule)
      },
      {
        path: 'screen3',
        loadChildren: () => import('./begin-suervy/screen3/screen3.module').then( m => m.Screen3PageModule)
      },
      {
        path: 'screen4',
        loadChildren: () => import('./begin-suervy/screen4/screen4.module').then( m => m.Screen4PageModule)
      },
      {
        path: 'screen5',
        loadChildren: () => import('./begin-suervy/screen5/screen5.module').then( m => m.Screen5PageModule)
      },
      {
        path: 'screen6',
        loadChildren: () => import('./begin-suervy/screen6/screen6.module').then( m => m.Screen6PageModule)
      },
      {
        path: 'screen7',
        loadChildren: () => import('./begin-suervy/screen7/screen7.module').then( m => m.Screen7PageModule)
      },
      {
        path: 'screen8',
        loadChildren: () => import('./begin-suervy/screen8/screen8.module').then( m => m.Screen8PageModule)
      },
    ])
  ]
})
export class RegistrationModule { }
