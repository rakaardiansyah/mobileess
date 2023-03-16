import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
  }

  onLogin() {

    this.router.navigateByUrl('tabnav', { replaceUrl: true });

    /*
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.router.navigateByUrl('/tabs', {replaceUrl: true});
    this.isLoading = false;
    this.form.reset();

    console.log(this.form.value);
    */

    /*
    this.isLoading = false;
    let msg = 'Could not sign you in, please try again';
    if(e.code == 'auth/user-not-found') {
      msg = 'Email Id could not be found';
    } else if(e.code == 'auth/wrong-password') {
      msg = 'Please enter correct password';
    }
    this.showAlert(msg);
    */
  }

  onSignup() {
    this.router.navigateByUrl('signup', { replaceUrl: true });
  }

  onForgot() {
    this.router.navigateByUrl('forgot', { replaceUrl: true });
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
