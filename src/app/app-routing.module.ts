import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth-screens/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth-screens/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./auth-screens/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./auth-screens/confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./auth-screens/reset/reset.module').then( m => m.ResetPageModule)
  },
  {
    path: 'tabnav',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  // {
  //   path: 'request',
  //   loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule)
  // },
  // {
  //   path: 'log-book',
  //   loadChildren: () => import('./log-book/log-book.module').then( m => m.LogBookPageModule)
  // },
  // {
  //   path: 'transaction',
  //   loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  // },
  // {
  //   path: 'account',
  //   loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
