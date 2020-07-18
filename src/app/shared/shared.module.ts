import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'verify-code',
        loadChildren: () => import('./verification-code/verification-code.module').then(m => m.VerificationCodePageModule)
      },
      {
        path: 'password',
        loadChildren: () => import('./password/password.module').then(m => m.PasswordPageModule)
      },
    ])
  ]
})
export class SharedModule { }
