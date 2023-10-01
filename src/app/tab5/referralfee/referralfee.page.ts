import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-referralfee',
  templateUrl: './referralfee.page.html',
  styleUrls: ['./referralfee.page.scss'],
})

export class ReferralfeePage implements OnInit {

  constructor(private popCtrl: PopoverController) { }

  ngOnInit() {
  }

  async _openPopover(ev: any) {
    // console.log ("popover works!")
    const popover = await this.popCtrl.create({
      component: PopoverController,
      event:ev
    })

    popover.present()
    return await popover.present()
  }


}
