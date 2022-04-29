import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit {

 categorias:Categoria[]=[
   new Categoria(1,"Laminas","advance-card-alaska","laminas"),
   new Categoria(2,"Ángulos","advance-card-alaska","angulos"),
   new Categoria(3,"Pletinas","advance-card-alaska","pletinas"),
   new Categoria(4,"Cabillas","advance-card-alaska","cabillas"),
   new Categoria(5,"Vigas","advance-card-alaska","vigas"),
   new Categoria(6,"Tubos estructurales","advance-card-alaska","tubos-estructurales"),
   
  
 ];
  constructor() { }

  ngOnInit() {}

  
}






