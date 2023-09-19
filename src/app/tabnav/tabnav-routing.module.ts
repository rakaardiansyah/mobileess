import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'request',
        loadChildren: () => import('../request/request.module').then( m => m.RequestPageModule)
      },
      {
        path: 'logbook',
        loadChildren: () => import('../logbook/logbook.module').then( m => m.LogBookPageModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('../transaction/transaction.module').then( m => m.TransactionPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabnav/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabnav/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TabnavPageRoutingModule {}