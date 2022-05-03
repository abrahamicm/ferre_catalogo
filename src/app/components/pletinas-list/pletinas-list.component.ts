import { Component, OnInit } from '@angular/core';
import { Pletinas } from '../../models/pletinas';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-pletinas-list',
  templateUrl: './pletinas-list.component.html',
  styleUrls: ['./pletinas-list.component.scss'],
})
export class PletinasListComponent implements OnInit {

  lista:IProductos[]=[
    {
      "id": "0115-002",
      "medida": "1 1/2 X 1/8 SID",
      "mts": 6,
      "precio": "14$"
    },
    {
      "id": "0108-023",
      "medida": "1 1/4 X 1/4 LAM",
      "mts": 6,
      "precio": "20$"
    },
    {
      "id": "0115-005",
      "medida": "1 1/4 X 1/8 LAM",
      "mts": 6,
      "precio": "11$"
    },
    {
      "id": "0115-006",
      "medida": "1 1/4 X 3/16 LAM",
      "mts": 6,
      "precio": "13.5$"
    },
    {
      "id": "0115-007",
      "medida": "1 X 1/4 SID",
      "mts": 6,
      "precio": "16$"
    },
    {
      "id": "0115-008",
      "medida": "1 X 1/8 LAM",
      "mts": 6,
      "precio": "8$"
    },
    {
      "id": "0108-015",
      "medida": "1 X 3/16 SID",
      "mts": 6,
      "precio": "12$"
    },
    {
      "id": "0115-011",
      "medida": "1/2 X 1/8 LAM",
      "mts": 6,
      "precio": "5$"
    },
    {
      "id": "0108-024",
      "medida": "2 X 1/4  SID",
      "mts": 6,
      "precio": "25$"
    },
    {
      "id": "0115-016",
      "medida": "2 X 1/4 LAM",
      "mts": 6,
      "precio": "22$"
    },
    {
      "id": "0115-035",
      "medida": "2 X 1/8 LAM",
      "mts": 6,
      "precio": "15$"
    },
    {
      "id": "0115-018",
      "medida": "2 X 3/16 LAM",
      "mts": 6,
      "precio": "18$"
    },
    {
      "id": "0115-036",
      "medida": "2 X 3/16 SID",
      "mts": 6,
      "precio": "20$"
    },
    {
      "id": "0115-020",
      "medida": "3/4 X 1/8",
      "mts": 6,
      "precio": "7$"
    },
    {
      "id": "0115-027",
      "medida": "65 X 12MM  SID",
      "mts": 6,
      "precio": "44$"
    },
    {
      "id": "0115-028",
      "medida": "65 X 6MM  SID",
      "mts": 6,
      "precio": "35$"
    },
    {
      "id": "0115-029",
      "medida": "65 X 9MM  SID",
      "mts": 6,
      "precio": "35$"
    },
    {
      "id": "0108-017",
      "medida": "75 X 12MM SID",
      "mts": 5.54,
      "precio": "0$"
    },
    {
      "id": "0115-030",
      "medida": "75 X 12MM  SID",
      "mts": 6,
      "precio": "81$"
    },
    {
      "id": "0115-032",
      "medida": "75 X 9MM  SID",
      "mts": 6,
      "precio": "72$"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
