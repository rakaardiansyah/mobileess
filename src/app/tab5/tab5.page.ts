import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  constructor(
    public router : Router
  ) { }

  profilesaya() {
    this.router.navigateByUrl("/profilesaya");
  }

  daftartransaksi() {
    this.router.navigateByUrl("/daftartransaksi");
  }

  referralfee() {
    this.router.navigateByUrl("/referralfee");
  }

  fasilitasmembership() {
    this.router.navigateByUrl("/fasilitasmembership");
  }

}
