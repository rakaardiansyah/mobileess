import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form!: FormGroup;
  type = true;
  isLoading!: boolean;

  isChecked: boolean = false;
  checkboxLabel: string = 'Lorem ipsum dolor sit amet consectetur dapibus faucibus fusce euismod odio eu mauris neque ultrices bibendum non posuere morbi urna condimentum Hac ultricies tellus sed aliquam';

  
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
  }

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { 
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      full_name: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required]}),
      noktp: new FormControl(null, {validators: [Validators.required]}),
      tanggal: new FormControl(null, {validators: [Validators.required]}),
      jenkel: new FormControl(null, {validators: [Validators.required]}),
      nohp: new FormControl(null, {validators: [Validators.required]}),
      cbox_ket1: new FormControl(null, {validators: [Validators.required]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      confirm_password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
    });
  }

  changeType() {
    this.type = !this.type;
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

  toggleCheckbox() {
    this.isChecked = !this.isChecked;

    if (this.isChecked) {
      console.log('Checkbox checked');
    } else {
      console.log('Checkbox unchecked');
    }
  }

  onLogin() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

  ontxtLogin() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

}
