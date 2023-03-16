import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { IonTabs, TabsCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {
  @ViewChild('tabs', { static: false }) tabs: IonTabs | undefined;
  selectedTab: string | undefined;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
  ) { }

  ngOnInit() {
  }

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
      box.style.backgroundColor = '#0EA99B';
    }
  }

}
