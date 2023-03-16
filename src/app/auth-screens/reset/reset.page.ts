import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

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
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      confirm_password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  onReset() {
    this.router.navigateByUrl('login', { replaceUrl: true });
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
