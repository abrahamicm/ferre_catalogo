import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  template: `
  <ion-content>
    <ion-slides pager="true" [options]="slideOpts">
      <ion-slide>
        <h1>Slide 1</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 2</h1>
      </ion-slide>
      <ion-slide>
        <h1>Slide 3</h1>
      </ion-slide>
    </ion-slides>
  </ion-content>
`,
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
}
