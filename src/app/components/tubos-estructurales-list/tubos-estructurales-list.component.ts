import { Component, OnInit } from '@angular/core';
import { TubosEstructurales } from '../../models/tubos-estructurales';
import { IProductos } from '../../interfaces/IProductos';

@Component({
  selector: 'app-tubos-estructurales-list',
  templateUrl: './tubos-estructurales-list.component.html',
  styleUrls: ['./tubos-estructurales-list.component.scss'],
})
export class TubosEstructuralesListComponent implements OnInit {

  lista:IProductos[]=[
    {
      "id": "0116-005",
      "medida": "HN EST 100X100X6MM",
      "mts": 1,
      "precio": "384$"
    },
    {
      "id": "0117-058",
      "medida": "HN EST 100X40X2,5",
      "mts": 12,
      "precio": "155$"
    },
    {
      "id": "0117-002",
      "medida": "HN EST 100X40X2,5MM",
      "mts": 6,
      "precio": "78$"
    },
    {
      "id": "0111-046",
      "medida": "HN EST 100X40X2,5",
      "mts": 11.78,
      "precio": "155$"
    },
    {
      "id": "0117-003",
      "medida": "HN EST 100X40X3MM",
      "mts": 12,
      "precio": "161$"
    },
    {
      "id": "0111-044",
      "medida": "HN EST 100X40X3MM",
      "mts": 3,
      "precio": "35$"
    },
    {
      "id": "0116-007",
      "medida": "HN EST 110X110X3,4MM",
      "mts": 1,
      "precio": "239$"
    },
    {
      "id": "0112-017",
      "medida": "HN EST 110X110X3,4MM (2DA)",
      "mts": 6,
      "precio": "120$"
    },
    {
      "id": "0116-009",
      "medida": "HN EST 120X120X4MM",
      "mts": 1,
      "precio": "346$"
    },
    {
      "id": "0112-016",
      "medida": "HN EST 120X120X7.20MM",
      "mts": 6,
      "precio": "275$"
    },
    {
      "id": "0117-009",
      "medida": "HN EST 120X60X3MM",
      "mts": 12,
      "precio": "210$"
    },
    {
      "id": "0116-011",
      "medida": "HN EST 135X135X4,3MM",
      "mts": 1,
      "precio": "390$"
    },
    {
      "id": "0117-012",
      "medida": "HN EST 140X60X3MM",
      "mts": 6,
      "precio": "110$"
    },
    {
      "id": "0116-016",
      "medida": "HN EST 155X155X4,5MM",
      "mts": 6,
      "precio": "250$"
    },
    {
      "id": "0116-017",
      "medida": "HN EST 155X155X5,2MM",
      "mts": 1,
      "precio": "520$"
    },
    {
      "id": "0116-018",
      "medida": "HN EST 155X155X5,2MM",
      "mts": 6,
      "precio": "260$"
    },
    {
      "id": "0117-060",
      "medida": "HN EST 160X65X3,2MM",
      "mts": 12,
      "precio": "330$"
    },
    {
      "id": "0117-018",
      "medida": "HN EST 160X65X3,4MM",
      "mts": 6,
      "precio": "165$"
    },
    {
      "id": "0116-020",
      "medida": "HN EST 175X175X5,5MM",
      "mts": 6,
      "precio": "285$"
    },
    {
      "id": "0112-014",
      "medida": "HN EST 175X175X6MM",
      "mts": 1,
      "precio": "630$"
    },
    {
      "id": "0117-019",
      "medida": "HN EST 180X65X4MM",
      "mts": 12,
      "precio": "354$"
    },
    {
      "id": "0116-023",
      "medida": "HN EST 200X200X5.5MM",
      "mts": 1,
      "precio": "0$"
    },
    {
      "id": "0116-026",
      "medida": "HN EST 200X200X7MM",
      "mts": 6,
      "precio": "430$"
    },
    {
      "id": "0116-027",
      "medida": "HN EST 220X220X7MM",
      "mts": 1,
      "precio": "1081$"
    },
    {
      "id": "0117-023",
      "medida": "HN EST 220X90X4,1MM",
      "mts": 12,
      "precio": "495$"
    },
    {
      "id": "0117-024",
      "medida": "HN EST 220X90X4,1MM",
      "mts": 6,
      "precio": "248$"
    },
    {
      "id": "0116-031",
      "medida": "HN EST 260X260X11MM",
      "mts": 1,
      "precio": "1787$"
    },
    {
      "id": "0116-034",
      "medida": "HN EST 260X260X8,4MM",
      "mts": 6,
      "precio": "693$"
    },
    {
      "id": "0116-037",
      "medida": "HN EST 260X260X9MM",
      "mts": 1,
      "precio": "1485$"
    },
    {
      "id": "0117-029",
      "medida": "HN EST 260X90X6,2MM  (2DA)",
      "mts": 12,
      "precio": "550$"
    },
    {
      "id": "0111-039",
      "medida": "HN EST 260X90X6,2MM  (2DA)",
      "mts": 6,
      "precio": "346$"
    },
    {
      "id": "0117-040",
      "medida": "HN EST 320X120X7MM",
      "mts": 6,
      "precio": "491$"
    },
    {
      "id": "0117-042",
      "medida": "HN EST 320X120X9MM",
      "mts": 6,
      "precio": "620$"
    },
    {
      "id": "0112-008",
      "medida": "HN EST 50X50X4MM",
      "mts": 6,
      "precio": "65$"
    },
    {
      "id": "0116-048",
      "medida": "HN EST 70X70X3MM",
      "mts": 6,
      "precio": "55$"
    },
    {
      "id": "0116-049",
      "medida": "HN EST 75X75X2,4MM",
      "mts": 6,
      "precio": "70$"
    },
    {
      "id": "0112-019",
      "medida": "HN EST 75X75X5MM",
      "mts": 12,
      "precio": "170$"
    },
    {
      "id": "0117-055",
      "medida": "HN EST 80X40X2MM",
      "mts": 12,
      "precio": "125$"
    },
    {
      "id": "0117-056",
      "medida": "HN EST 80X40X2MM",
      "mts": 6,
      "precio": "63$"
    },
    {
      "id": "0116-051",
      "medida": "HN EST 90X90X2,5MM",
      "mts": 1,
      "precio": "178$"
    },
    {
      "id": "0116-052",
      "medida": "HN EST 90X90X2,5MM",
      "mts": 6,
      "precio": "89$"
    },
    {
      "id": "0110-021",
      "medida": "HP 1 - 1/2 x 1/2 X 0.80MM",
      "mts": 6,
      "precio": "12$"
    },
    {
      "id": "0119-003",
      "medida": "HP 1 - 1/2 x 1/2 X 0.90MM",
      "mts": 6,
      "precio": "12.5$"
    },
    {
      "id": "0118-008",
      "medida": "HP 1 1/4 x 1 1/4 X 0.90MM",
      "mts": 6,
      "precio": "19$"
    },
    {
      "id": "0109-012",
      "medida": "HP 1 x 1 X 2.00MM",
      "mts": 6,
      "precio": "25$"
    },
    {
      "id": "0119-014",
      "medida": "HP 1 x 1/2 X 0.90MM",
      "mts": 6,
      "precio": "9.5$"
    },
    {
      "id": "0118-018",
      "medida": "HP 1/2 x 1/2 X 0.90MM",
      "mts": 6,
      "precio": "6.5$"
    },
    {
      "id": "0119-020",
      "medida": "HP 2 x 1 x 1.20 MM",
      "mts": 6,
      "precio": "25$"
    },
    {
      "id": "0119-026",
      "medida": "HP 2 x 1–1/2 x 0.90MM",
      "mts": 6,
      "precio": "22$"
    },
    {
      "id": "0109-011",
      "medida": "HP 2 x 2 X 0.70MM",
      "mts": 6,
      "precio": "18$"
    },
    {
      "id": "0118-023",
      "medida": "HP 2 x 2 X 0.90MM",
      "mts": 6,
      "precio": "25.2$"
    },
    {
      "id": "0109-016",
      "medida": "HP 2 x 2 X 1.10MM",
      "mts": 6,
      "precio": "30.8$"
    },
    {
      "id": "0119-041",
      "medida": "HP 3 x 1 x 1.10 MM",
      "mts": 6,
      "precio": "28$"
    },
    {
      "id": "0119-045",
      "medida": "HP 3 x 1 x 1.90MM",
      "mts": 6,
      "precio": "52$"
    },
    {
      "id": "0119-047",
      "medida": "HP 3 x 1 x 3MM",
      "mts": 6,
      "precio": "68$"
    },
    {
      "id": "0119-072",
      "medida": "HP 3 x 1–1/2 x 0.90 MM",
      "mts": 6,
      "precio": "28.8$"
    },
    {
      "id": "0119-048",
      "medida": "HP 3 x 1–1/2 x 1.10 MM",
      "mts": 6,
      "precio": "35.5$"
    },
    {
      "id": "0110-018",
      "medida": "HP 3 x 1–1/2 x 1.40 MM   (2DA)",
      "mts": 4.16,
      "precio": "28$"
    },
    {
      "id": "0110-013",
      "medida": "HP 3 x 1–1/2 x 1.5 MM",
      "mts": 6,
      "precio": "46$"
    },
    {
      "id": "0119-060",
      "medida": "HP 3 x 2 x 2.80MM",
      "mts": 6,
      "precio": "66$"
    },
    {
      "id": "0118-032",
      "medida": "HP 3/4 x 3/4 X 0.90MM",
      "mts": 6,
      "precio": "9.5$"
    },
    {
      "id": "0109-013",
      "medida": "HP 3/4 x 3/4 X 1.00MM",
      "mts": 6,
      "precio": "12$"
    },
    {
      "id": "0101-004",
      "medida": "P/ALFAJOL 1 1/4",
      "mts": 6.6,
      "precio": "35$"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
