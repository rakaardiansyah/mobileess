import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferralfeePageRoutingModule } from './referralfee-routing.module';

import { ReferralfeePage } from './referralfee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferralfeePageRoutingModule
  ],
  declarations: [ReferralfeePage]
})
export class ReferralfeePageModule {}
