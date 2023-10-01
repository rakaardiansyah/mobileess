import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-daftarmembership',
  templateUrl: './daftarmembership.page.html',
  styleUrls: ['./daftarmembership.page.scss'],
})

export class DaftarmembershipPage {

  clickedImage:any="";

  loadImageFromDevice($event: Event) {
    throw new Error('Method not implemented.');
  }




  constructor(
    private route: Router,
  ) { }


  // captureImage = async () => {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  
  //   // image.webPath will contain a path that can be set as an image src.
  //   // You can access the original file using image.path, which can be
  //   // passed to the Filesystem API to read the raw data of the image,
  //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //   this.clickedImage = image.base64String;
  
  //   // Can be set to the src of an image now
  // };


  getBack() {
    this.route.navigate(['/fasilitasmembership']);
  }

}
