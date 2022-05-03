import { Component, Input, OnInit } from '@angular/core';
import { BaseMaterial } from '../../models/base-material';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-base-material-list',
  templateUrl: './base-material-list.component.html',
  styleUrls: ['./base-material-list.component.scss'],
})
export class BaseMaterialListComponent implements OnInit {


  constructor() { }


  @Input() lista:IProductos[]
  @Input() MM:string
  @Input() Mts:string
  @Input() Medida:string
  @Input() Marca:string
  @Input() Peso:string
  @Input() Precio:string
  @Input() Nombre:string
  ngOnInit() {}
}