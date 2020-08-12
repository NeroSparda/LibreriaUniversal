import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg'
  ];
  gifs: string[] = [
    'assets/images/gif-1.gif',
    'assets/images/gif-2.gif',
    'assets/images/gif-3.gif'];
  constructor() { }

  ngOnInit() {
  }

}
