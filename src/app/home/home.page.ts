import { AfterContentChecked, Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Pagination, Autoplay]);

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private router: Router,
   ) {
  }

  ngOnInit() {

    this.renderer.setStyle(this.element.nativeElement.querySelector('.toolbar'), 'webkitTransition', 'top 700ms');
  }

  onContentScroll(event : Event) {
    const value = (event as CustomEvent).detail.scrollTop;

    //console.log(value);
    if (value >= 84) {
      this.renderer.setStyle(this.element.nativeElement.querySelector('.toolbar'), 'top', '-84px');
      this.renderer.setStyle(this.element.nativeElement.querySelector('.toolbar'), 'opacity', '80%');
    } else {
      this.renderer.setStyle(this.element.nativeElement.querySelector('.toolbar'), 'top', '0px');
      this.renderer.setStyle(this.element.nativeElement.querySelector('.toolbar'), 'opacity', '100%');
    }
  }

}
