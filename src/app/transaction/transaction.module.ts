import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TransactionPage } from './transaction.page';
import { TransactionPageRoutingModule } from './transaction-routing.module';

@NgModule({
  declarations: [TransactionPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionPageRoutingModule
  ],
  exports: [TransactionPage],
})
export class TransactionPageModule {}
