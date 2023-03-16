import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  form!: FormGroup;
  type = true;
  isLoading!: boolean;
  
  constructor(
    private router: Router,
    private alertController: AlertController
  ) { 
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({      
      email: new FormControl(null, {validators: [Validators.required]}),      
    });
  }

  changeType() {
    this.type = !this.type;
  }

  onReset() {
    this.router.navigateByUrl('confirm', { replaceUrl: true });
  }

  async showAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Authentication Failed',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
