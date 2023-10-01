import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FasilitasmembershipPageRoutingModule } from './fasilitasmembership-routing.module';

import { FasilitasmembershipPage } from './fasilitasmembership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FasilitasmembershipPageRoutingModule
  ],
  declarations: [FasilitasmembershipPage]
})
export class FasilitasmembershipPageModule {}
