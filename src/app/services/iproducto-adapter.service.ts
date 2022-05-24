import { Injectable } from '@angular/core';
import { IProductos } from '../interfaces/IProductos';
import { APIProducto } from '../interfaces/APIProducto';

@Injectable({
  providedIn: 'root'
})
export class IproductoAdapterService {


  constructor() { }

  private adaptarUno(wpProduct: APIProducto): IProductos {
    return {
      id: wpProduct.id.toString(),
      mm: wpProduct.acf.mm,
      nombre: wpProduct.title.rendered,

      medida: wpProduct.acf.medida,
      marca: "",
      peso: wpProduct.acf.peso,
      precio: wpProduct.acf.precio,
      existencia: 0,
      mts: Number(wpProduct.acf.mts),
      ferre_categorias: wpProduct.ferre_categorias,
      ferre_sedes: wpProduct.ferre_sedes
    }
  }
  adaptarTodos(productosApis: APIProducto[]): IProductos[] {
    return productosApis.map(Ap => this.adaptarUno(Ap))
  }
}
