import { Component, OnInit } from '@angular/core';
import { BtnFooter } from '../../models/btn-footer';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss'],
})
export class Footer2Component implements OnInit {
  numero = environment.NUMERO
  labelNUmero = environment.LABEL_NUMERO
  ubicacion = environment.UBICACION
  constructor() { }
  botones: BtnFooter[] = [
    new BtnFooter(1, this.labelNUmero, "call", `tel:
    ${this.numero}`, "tel"),
    new BtnFooter(2, this.labelNUmero, "logo-whatsapp", `https://api.whatsapp.com/send?phone=${this.numero}`, "whatsapp"),
    new BtnFooter(2, "Instagram", "logo-instagram", "https://www.instagram.com/ferreacerovalencia/", "ferreacero"),
    new BtnFooter(2, "Ubicación", "location", this.ubicacion, "ferreacero"),
  ]
  ngOnInit() { }

}
