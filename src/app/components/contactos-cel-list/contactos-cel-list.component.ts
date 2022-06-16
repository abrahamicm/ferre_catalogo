import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { FooterItems, fTipo } from 'src/app/interfaces/footer-items';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-contactos-cel-list',
  templateUrl: './contactos-cel-list.component.html',
  styleUrls: ['./contactos-cel-list.component.scss'],
})
export class ContactosCelListComponent implements OnInit {
  numero = environment.NUMERO
  labelNUmero = environment.LABEL_NUMERO
  ubicacion = environment.UBICACION
  sede = environment.SEDE


  items: FooterItems[] = [
    { id: "1", enlace: `https://api.whatsapp.com/send?phone=${this.numero}`, nombre: "Whatsapp", icono: "logo-whatsapp", label: this.labelNUmero },
    { id: "3", enlace: `tel:${this.numero}`, nombre: "Teléfono", icono: "call", label: `${this.labelNUmero}` },
    { id: "2", enlace: this.ubicacion, nombre: "Ubicación", icono: "location-outline", label: this.sede },
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
