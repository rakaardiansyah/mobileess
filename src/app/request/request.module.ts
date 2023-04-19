import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RequestPage } from './request.page';
import { RequestPageRoutingModule } from './request-routing.module';

@NgModule({
  declarations: [RequestPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule
  ],
  exports: [RequestPage],

})
export class RequestPageModule {}
