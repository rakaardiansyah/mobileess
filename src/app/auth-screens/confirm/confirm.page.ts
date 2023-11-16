import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

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

  onOpen() {
    this.router.navigateByUrl('/reset', { replaceUrl: true });
  }
  
  onSkip() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  onOther() {
    this.router.navigateByUrl('/forgot', { replaceUrl: true });
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
