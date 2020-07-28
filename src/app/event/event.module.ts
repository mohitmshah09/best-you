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
        redirectTo: 'event',
        pathMatch: 'full'
      },
      {
        path: 'event',
        loadChildren: () => import('./event/event.module').then(m => m.EventPageModule)
      },
      {
        path: 'event-detail',
        loadChildren: () => import('../event/event-detail/event-detail.module').then( m => m.EventDetailPageModule)
      },
    
    ])
  ]
})
export class EventModule { }
