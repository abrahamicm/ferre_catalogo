import { Component, OnInit } from '@angular/core';
import { TubosEstructurales } from '../../models/tubos-estructurales';

@Component({
  selector: 'app-tubos-hp-list',
  templateUrl: './tubos-hp-list.component.html',
  styleUrls: ['./tubos-hp-list.component.scss'],
})
export class TubosHpListComponent implements OnInit {

  lista:TubosEstructurales[]=[];
  constructor() { }

  ngOnInit() {}

}
