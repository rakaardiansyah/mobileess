import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LogBookPage } from './logbook.page';
import { LogBookPageRoutingModule } from './logbook-routing.module';

@NgModule({
  declarations: [LogBookPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogBookPageRoutingModule
  ],
  exports: [LogBookPage],
})
export class LogBookPageModule {}
