import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarmembershipPage } from './daftarmembership.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarmembershipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DaftarmembershipPageRoutingModule {

}
