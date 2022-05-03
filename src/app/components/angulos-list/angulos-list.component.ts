import { Component, OnInit } from '@angular/core';
import { IProductos } from 'src/app/interfaces/IProductos';
import { Angulos } from '../../models/angulos';

@Component({
  selector: 'app-angulos-list',
  templateUrl: './angulos-list.component.html',
  styleUrls: ['./angulos-list.component.scss'],
})
export class AngulosListComponent implements OnInit {

  

  lista:IProductos[]=[
    {
      "id": "0103-006",
      "medida": "20X20X3MM",
      "mts": 6,
      "precio": "12$",
      "existencia": 7
    },
    {
      "id": "0104-021",
      "medida": "25X25X2,2MM",
      "mts": 6,
      "precio": "10$",
      "existencia": 77
    },
    {
      "id": "0104-013",
      "medida": "25X25X2,5MM",
      "mts": 6,
      "precio": "14$",
      "existencia": 1
    },
    {
      "id": "0104-023",
      "medida": "25X25X4MMX",
      "mts": 6,
      "precio": "18,5$",
      "existencia": 27
    },
    {
      "id": "0103-010",
      "medida": "30X30X3MM",
      "mts": 6,
      "precio": "19$",
      "existencia": 113
    },
    {
      "id": "0103-014",
      "medida": "35X35X6MM",
      "mts": 6,
      "precio": "36$",
      "existencia": 1
    },
    {
      "id": "0103-022",
      "medida": "50X50X4MM",
      "mts": 6,
      "precio": "42$",
      "existencia": 75
    },
    {
      "id": "0103-024",
      "medida": "50X50X5MM",
      "mts": 6,
      "precio": "45$",
      "existencia": 1
    },
    {
      "id": "0104-018",
      "medida": "65X65X5MM",
      "mts": 6,
      "precio": "54$",
      "existencia": 1
    },
    {
      "id": "0103-033",
      "medida": "65X65X7MM",
      "mts": 12,
      "precio": "162$",
      "existencia": 6
    },
    {
      "id": "0103-034",
      "medida": "65X65X7MM",
      "mts": 6,
      "precio": "81$",
      "existencia": 1
    },
    {
      "id": "0103-045",
      "medida": "90X90X7MM",
      "mts": 12,
      "precio": "174$",
      "existencia": 56
    }
  ]
  constructor() { }

  ngOnInit() {}

}
