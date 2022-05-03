import { Component, OnInit } from '@angular/core';
import { Cabillas } from '../../models/cabillas';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-cabillas-list',
  templateUrl: './cabillas-list.component.html',
  styleUrls: ['./cabillas-list.component.scss'],
})
export class CabillasListComponent implements OnInit {

  lista: IProductos[]=
    [
      {
        "id": "0101-007",
        "medida": "10MM 3/8",
        "mts": 3,
        "precio": "2$"
      },
      {
        "id": "0106-002",
        "medida": "10MM 3/8",
        "mts": 3,
        "precio": "6,5$"
      },
      {
        "id": "0106-006",
        "medida": "16MM 5/8",
        "mts": 3,
        "precio": "12$"
      },
      {
        "id": "0106-008",
        "medida": "20MM 3/4",
        "mts": 3,
        "precio": "16$"
      },
      {
        "id": "0106-012",
        "medida": "25MM 1",
        "mts": 3,
        "precio": "15$"
      }
    ];
  constructor() { }

  ngOnInit() {}

}
