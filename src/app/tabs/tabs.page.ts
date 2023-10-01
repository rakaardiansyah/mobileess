import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IonTabs, TabsCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild('tabs', { static: false }) tabs: IonTabs | undefined;
  selectedTab: string | undefined;  

  constructor(
    public element: ElementRef, 
    public renderer: Renderer2,  
  ) { }

  setCurrentTab() {
    this.selectedTab = this.tabs?.getSelected();
    console.log(this.selectedTab);
  }

  setBoxColor() {
    const boxes = Array.from(
      document.getElementsByClassName('box') as HTMLCollectionOf<HTMLElement>,
    );
    
    boxes.forEach(box => {
      box.style.backgroundColor = 'transparent';      
    });

    this.selectedTab = this.tabs?.getSelected();
    const box = document.getElementById(this.selectedTab as string);
    console.log(this.selectedTab);
    if (box != null) {
      box.style.backgroundColor = '#123167';      
    }
  }

}
