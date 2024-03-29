import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    // {
    //   path: 'splash',
    //   loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
    // },
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
      path: 'tabs',
      loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
    },

    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
