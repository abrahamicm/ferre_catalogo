import { Component, OnInit } from '@angular/core';
import { Vigas } from '../../models/vigas';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-vigas-list',
  templateUrl: './vigas-list.component.html',
  styleUrls: ['./vigas-list.component.scss'],
})
export class VigasListComponent implements OnInit {

  lista:IProductos[]=[
    {
      "id": "0115-001",
      "medida": "CP 250",
      "mts": 12,
      "precio": "670$"
    },
    {
      "id": "0125-014",
      "medida": "CP 250",
      "mts": 6,
      "precio": "335$"
    },
    {
      "id": "0124-048",
      "medida": "HEA 100",
      "mts": 12,
      "precio": "0$"
    },
    {
      "id": "0124-047",
      "medida": "HEA 180",
      "mts": 5,
      "precio": "337$"
    },
    {
      "id": "0121-012",
      "medida": "HEA 200",
      "mts": 6,
      "precio": "484$"
    },
    {
      "id": "0121-015",
      "medida": "HEA 240",
      "mts": 12,
      "precio": "1375$"
    },
    {
      "id": "0121-027",
      "medida": "HEA 340",
      "mts": 12,
      "precio": "2394$"
    },
    {
      "id": "0121-031",
      "medida": "HEA 360",
      "mts": 12,
      "precio": "2554$"
    },
    {
      "id": "0121-033",
      "medida": "HEA 400",
      "mts": 12,
      "precio": "2850$"
    },
    {
      "id": "0121-037",
      "medida": "HEA 500",
      "mts": 12,
      "precio": "3534$"
    },
    {
      "id": "0121-043",
      "medida": "HEA 600",
      "mts": 12,
      "precio": "4059$"
    },
    {
      "id": "0121-001",
      "medida": "HEB 100",
      "mts": 12,
      "precio": "465$"
    },
    {
      "id": "0122-002",
      "medida": "HEB 100",
      "mts": 6,
      "precio": "233$"
    },
    {
      "id": "0122-007",
      "medida": "HEB 160",
      "mts": 12,
      "precio": "0$"
    },
    {
      "id": "0123-007",
      "medida": "IPE 160",
      "mts": 12,
      "precio": "360$"
    },
    {
      "id": "0123-009",
      "medida": "IPE 180",
      "mts": 12,
      "precio": "429$"
    },
    {
      "id": "0123-010",
      "medida": "IPE 180",
      "mts": 6,
      "precio": "214,5$"
    },
    {
      "id": "0123-013",
      "medida": "IPE 220",
      "mts": 12,
      "precio": "598$"
    },
    {
      "id": "0123-014",
      "medida": "IPE 220",
      "mts": 6,
      "precio": "299$"
    },
    {
      "id": "0123-022",
      "medida": "IPE 300",
      "mts": 6,
      "precio": "481$"
    },
    {
      "id": "0123-026",
      "medida": "IPE 330",
      "mts": 6,
      "precio": "560$"
    },
    {
      "id": "0123-031",
      "medida": "IPE 450",
      "mts": 12,
      "precio": "1770$"
    },
    {
      "id": "0123-040",
      "medida": "IPE 80",
      "mts": 6,
      "precio": "76$"
    },
    {
      "id": "0124-001",
      "medida": "IPN 100",
      "mts": 12,
      "precio": "200$"
    },
    {
      "id": "0124-003",
      "medida": "IPN 120",
      "mts": 12,
      "precio": "220$"
    },
    {
      "id": "0124-004",
      "medida": "IPN 120",
      "mts": 6,
      "precio": "110$"
    },
    {
      "id": "0122-040",
      "medida": "IPN 160",
      "mts": 6,
      "precio": "215$"
    },
    {
      "id": "0124-021",
      "medida": "IPN 300",
      "mts": 12,
      "precio": "1236$"
    },
    {
      "id": "0124-046",
      "medida": "IPN 80",
      "mts": 6,
      "precio": "81$"
    },
    {
      "id": "0125-001",
      "medida": "UPL 100",
      "mts": 12,
      "precio": "195$"
    },
    {
      "id": "0125-002",
      "medida": "UPL 100",
      "mts": 6,
      "precio": "85$"
    },
    {
      "id": "0126-010",
      "medida": "UPN 180",
      "mts": 6,
      "precio": "250$"
    },
    {
      "id": "0126-015",
      "medida": "UPN 240",
      "mts": 12,
      "precio": "756$"
    },
    {
      "id": "0126-023",
      "medida": "UPN 320",
      "mts": 12,
      "precio": "1357$"
    },
    {
      "id": "0121-045",
      "medida": "UPN 360",
      "mts": 12,
      "precio": "1390$"
    },
    {
      "id": "0127-005",
      "medida": "VP 160",
      "mts": 12,
      "precio": "374$"
    },
    {
      "id": "0127-007",
      "medida": "VP 180",
      "mts": 12,
      "precio": "404$"
    },
    {
      "id": "0127-008",
      "medida": "VP 180",
      "mts": 6,
      "precio": "190$"
    },
    {
      "id": "0125-008",
      "medida": "VP 180",
      "mts": 7.5,
      "precio": "252$"
    },
    {
      "id": "0127-009",
      "medida": "VP 200",
      "mts": 12,
      "precio": "549$"
    },
    {
      "id": "0125-016",
      "medida": "VP 200 (2DA)",
      "mts": 12,
      "precio": "434$"
    },
    {
      "id": "0127-010",
      "medida": "VP 200",
      "mts": 6,
      "precio": "275$"
    },
    {
      "id": "0125-007",
      "medida": "VP 200",
      "mts": 8,
      "precio": "366$"
    },
    {
      "id": "0125-010",
      "medida": "VP 250",
      "mts": 10.15,
      "precio": "567$"
    },
    {
      "id": "0127-011",
      "medida": "VP 250 (2DA)",
      "mts": 12,
      "precio": "670$"
    },
    {
      "id": "0125-009",
      "medida": "VP 250",
      "mts": 8.8,
      "precio": "492$"
    }
  ];
  constructor() { }

  ngOnInit() {}

}
