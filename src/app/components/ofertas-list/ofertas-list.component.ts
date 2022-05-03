import { Component, OnInit } from '@angular/core';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-ofertas-list',
  templateUrl: './ofertas-list.component.html',
  styleUrls: ['./ofertas-list.component.scss'],
})
export class OfertasListComponent implements OnInit {

  lista:IProductos[]=[
    {nombre:"Cemento gris",precio:"6.50"},
    {nombre:"Malla pollito",precio:"28$"},
    {nombre:"Pletina Siderúrgica",precio:"44$"},
  ];
  constructor() { }

  ngOnInit() {}

}
