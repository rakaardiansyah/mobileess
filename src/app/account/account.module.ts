import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import { AccountPageRoutingModule } from './account-routing.module';

@NgModule({
  declarations: [AccountPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule
  ],
  exports: [AccountPage],
})
export class AccountPageModule {}
