import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-portada-list',
  templateUrl: './portada-list.component.html',
  styleUrls: ['./portada-list.component.scss'],
})
export class PortadaListComponent implements OnInit {
  numero = environment.NUMERO
  labelNUmero = environment.LABEL_NUMERO
  ubicacion = environment.UBICACION
  constructor() { }

  ngOnInit() { }

}
