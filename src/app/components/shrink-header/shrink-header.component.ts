import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shrink-header',
  templateUrl: './shrink-header.component.html',
  styleUrls: ['./shrink-header.component.scss'],
})
export class ShrinkHeaderComponent implements OnInit, OnDestroy {

  @Input('scrollArea') scrollArea: any;
  @Input('headerHeight') headerHeight?: number;  
  newHeaderHeight: any;
  scrollSub?: Subscription;

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    public domCtrl: DomController
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement, 'height', this.headerHeight + 'px');

    this.scrollSub = this.scrollArea.ionScroll.subscribe((event: Event) => {
      const value = (event as CustomEvent).detail.scrollTop;      
      this.resizeHeader(event);
    });
  }

  resizeHeader(event: Event) {
    this.domCtrl.write(() => {
      const value = (event as CustomEvent).detail.scrollTop;
      this.newHeaderHeight = this.headerHeight ?? 0 - value;
      if(this.newHeaderHeight < 0) this.newHeaderHeight = 0;
      this.renderer.setStyle(this.element.nativeElement, 'height', this.newHeaderHeight + 'px');
    });
  }

  ngOnDestroy() {
    if(this.scrollSub) this.scrollSub.unsubscribe();
  }
}
