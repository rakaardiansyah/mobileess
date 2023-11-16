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
  checkboxLabel: string = 'Bermaksud untuk menjadi anggota koperasi dan sebagai anggota koperasi saya bersedia untuk menjalankan segala aturan yang tertuang dalam Anggaran Dasar, Anggaran Rumah Tangga Koperasi dan peraturan lain yang terkait.';
  checkboxLabel2: string = 'Dan sekaligus memberikan kuasa kepada Kopkar BRIS untuk memotong Gaji terkait kewajiban Anggota melalui HCS';

  
  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    console.log('Selected File:', selectedFile);
    // You can perform further actions with the selected file here
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
      statuspegawai: new FormControl(null, {validators: [Validators.required]}),
      unitkerja: new FormControl(null, {validators: [Validators.required]}),
      jabatan: new FormControl(null, {validators: [Validators.required]}),
      rekpayroll: new FormControl(null, {validators: [Validators.required]}),
      emailluar: new FormControl(null, {validators: [Validators.required]}),
      nohp: new FormControl(null, {validators: [Validators.required]}),
      tabexlegacy: new FormControl(null, {validators: [Validators.required]}),
      
      upld_ktp: new FormControl(null, {validators: [Validators.required]}),
      upld_idcard: new FormControl(null, {validators: [Validators.required]}),
      upld_slipgaji: new FormControl(null, {validators: [Validators.required]}),


      cbox_ket1: new FormControl(null, {validators: [Validators.required]}),
      cbox_ket2: new FormControl(null, {validators: [Validators.required]}),


      // password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]}),
      // confirm_password: new FormControl(null, {validators: [Validators.required, Validators.minLength(8)]})
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
    // Tambahkan logika lain yang diperlukan saat checkbox diubah
    // Contohnya bisa menampilkan pesan atau melakukan tindakan tertentu.
    if (this.isChecked) {
      console.log('Checkbox checked');
      // Lakukan tindakan lainnya jika checkbox dicentang
    } else {
      console.log('Checkbox unchecked');
      // Lakukan tindakan lainnya jika checkbox tidak dicentang
    }
  }

  onLogin() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

  ontxtLogin() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

}
