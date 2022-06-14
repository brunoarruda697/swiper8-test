import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions, Zoom } from 'swiper';
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Zoom, Navigation, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  config: SwiperOptions = {
    zoom: true,
    slidesPerView: 1,
    navigation: true,
    centeredSlides: true,
    direction: 'horizontal',
    enabled: true,
    pagination: true
  };

  onSwiper() {
    console.log('swiper');
  }
  onSlideChange() {
    console.log('slide change');
  }
}
