import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
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
