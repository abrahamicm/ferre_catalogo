import { Injectable } from '@angular/core';
import { APIProducto } from '../../interfaces/APIProducto';

@Injectable({
  providedIn: 'root'
})
export class ApiProductoOrderService {

  constructor() { }


  ordenarApiProductos(a: APIProducto, b: APIProducto) {


    if (a.acf.tipo < b.acf.tipo) {
      return -1;
    }
    if (a.acf.tipo > b.acf.tipo) {
      return 1;
    }

    if (+a.acf.orden < +b.acf.orden) {
      return -1;
    }
    if (+a.acf.orden > +b.acf.orden) {
      return 1;
    }


    if (+a.acf.mts < +b.acf.mts) {
      return -1;
    }
    if (+a.acf.mts > +b.acf.mts) {
      return 1;
    }


    if (+a.acf.espesor < +b.acf.espesor) {
      return -1;
    }
    if (+a.acf.espesor > +b.acf.espesor) {
      return 1;
    }


    if (+a.acf.Ancho < +b.acf.Ancho) {
      return -1;
    }
    if (+a.acf.Ancho > +b.acf.Ancho) {
      return 1;
    }


    if (+a.acf.Largo < +b.acf.Largo) {
      return -1;
    }
    if (+a.acf.Largo > +b.acf.Largo) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }




    return 0

  }


}
/*
tipo
orden 
mts 
espesor
Ancho 
Largo
title
*/