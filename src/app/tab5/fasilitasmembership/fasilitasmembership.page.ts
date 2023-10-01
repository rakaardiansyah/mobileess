import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fasilitasmembership',
  templateUrl: './fasilitasmembership.page.html',
  styleUrls: ['./fasilitasmembership.page.scss'],
})
export class FasilitasmembershipPage {

  constructor(private route: Router) { }

  getfasMembership() {
    this.route.navigate(['/fasilitasmembership/daftarmembership']);
  }

}
