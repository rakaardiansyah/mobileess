import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftartransaksiPage } from './daftartransaksi.page';

const routes: Routes = [
  {
    path: '',
    component: DaftartransaksiPage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftartransaksiPageRoutingModule {}
