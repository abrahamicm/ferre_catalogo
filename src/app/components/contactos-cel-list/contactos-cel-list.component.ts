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
    { id: "1", tipo: "whats", numero: "584143413241", nombre: "Yagua" },
    { id: "2", tipo: "whats", numero: "584244001351", nombre: "Sanblas" },
    { id: "3", tipo: "cel", numero: "584143413241", nombre: "Contacto" }
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
