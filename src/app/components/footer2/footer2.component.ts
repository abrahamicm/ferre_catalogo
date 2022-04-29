import { Component, OnInit } from '@angular/core';
import { BtnFooter } from '../../models/btn-footer';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss'],
})
export class Footer2Component implements OnInit {

  constructor() { }
  botones:BtnFooter[]=[
    new BtnFooter(1,"0414341324","call","tel:58414341324","tel"),
    new BtnFooter(2,"0414341324","logo-whatsapp","https://api.whatsapp.com/send?phone=58414341324","whatsapp"),
    new BtnFooter(2,"ferreacero","logo-instagram","https://www.instagram.com/ferreacerovalencia/","ferreacero"),
    new BtnFooter(2,"ferreacero","location","https://www.google.co.ve/maps/place/FERREACERO+VALENCIA/@10.2514055,-67.9127437,21z/data=!4m5!3m4!1s0x0:0xc40a037e3d1487bf!8m2!3d10.2515276!4d-67.913054?hl=es&shorturl=1","ferreacero"),
  ]
  ngOnInit() {}

}
