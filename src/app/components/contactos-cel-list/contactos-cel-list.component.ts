import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';

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
  constructor(private callNumber: CallNumber) { }

  ngOnInit() { }
  llamar(contacto) {
    
    console.log(contacto.numero)
    this.callNumber.callNumber("584124525546", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

}
