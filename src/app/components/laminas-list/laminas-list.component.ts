import { Component, OnInit } from '@angular/core';
import { Lamina } from 'src/app/models/lamina';

@Component({
  selector: 'app-laminas-list',
  templateUrl: './laminas-list.component.html',
  styleUrls: ['./laminas-list.component.scss'],
})
export class LaminasListComponent implements OnInit {

  laminas: Lamina[]=[
    new Lamina("6","1.20x2.40","138,4","100$"),
    new Lamina("7","1.20x2.40","138,4","100$"),
    new Lamina("8","1.20x2.40","138,4","100$"),
    new Lamina("9","1.20x2.40","138,4","100$"),
    new Lamina("10","1.20x2.40","138,4","100$"),
    new Lamina("10","1.20x2.40","138,4","100$"),
    new Lamina("20","1.20x2.40","138,4","100$"),
    new Lamina("22","1.20x2.40","138,4","100$"),
    new Lamina("25","1.20x2.40","138,4","100$"),
  ];
  constructor() { }

  ngOnInit() {}

}
