import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilesayaPageRoutingModule } from './profilesaya-routing.module';

import { ProfilesayaPage } from './profilesaya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilesayaPageRoutingModule
  ],
  declarations: [ProfilesayaPage]
})
export class ProfilesayaPageModule {}
