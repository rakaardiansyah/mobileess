import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarmembershipPageRoutingModule } from './daftarmembership-routing.module';

import { DaftarmembershipPage } from './daftarmembership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarmembershipPageRoutingModule
  ],
  declarations: [DaftarmembershipPage]
})

export class DaftarmembershipPageModule {}
