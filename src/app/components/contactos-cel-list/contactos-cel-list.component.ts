import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { FooterItems, fTipo } from 'src/app/interfaces/footer-items';

@Component({
  selector: 'app-contactos-cel-list',
  templateUrl: './contactos-cel-list.component.html',
  styleUrls: ['./contactos-cel-list.component.scss'],
})
export class ContactosCelListComponent implements OnInit {

  contactos: Contacto[] = [
    new Contacto(1, "Vendedor", "584143413241"),
    new Contacto(2, "Vendedor2", "584143413241"),
    new Contacto(3, "Vendedor3", "584143413241"),

  ]
  //fTipo

  items: FooterItems[] = [
    { id: "1", enlace: "https://api.whatsapp.com/send?phone=584143413241", nombre: "Whatsapp", icono: "logo-whatsapp", label: "584143413241" },
    { id: "3", enlace: "tel:584143413241", nombre: "Teléfono", icono: "call", label: "584143413241" },
    { id: "2", enlace: "https://www.google.co.ve/maps/place/FERREACERO+VALENCIA/@10.2514055,-67.9127437,21z/data=!4m5!3m4!1s0x0:0xc40a037e3d1487bf!8m2!3d10.2515276!4d-67.913054?hl=es&shorturl=1", nombre: "Ubicación", icono: "location-outline", label: "Yagua" },
  ];

  constructor(private callNumber: CallNumber) { }

  ngOnInit() { }
  //mejor usar href para llamar y para whatsapp
  // llamar(contacto) {

  //   console.log(contacto.numero)
  //   this.callNumber.callNumber("584124525546", true)
  //     .then(res => console.log('Launched dialer!', res))
  //     .catch(err => console.log('Error launching dialer', err));
  // }
  // escribir(contacto) {

  // }

}
