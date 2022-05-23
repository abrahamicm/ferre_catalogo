import { Injectable } from '@angular/core';
import { IProductos } from '../interfaces/IProductos';
import { APIProducto } from '../interfaces/APIProducto';

@Injectable({
  providedIn: 'root'
})
export class IproductoAdapterService {


  constructor() { }

  private apiWpAdapter(wpProduct: APIProducto): IProductos {
    return {
      id: wpProduct.id.toString(),
      mm: wpProduct.acf.mm,
      nombre: wpProduct.title.rendered,

      medida: wpProduct.acf.medida,
      marca: "",
      peso: wpProduct.acf.peso,
      precio: wpProduct.acf.precio,
      existencia: 0,
      mts:Number(wpProduct.acf.mts)
    }
  }
  converApiPToIp(productosApis:APIProducto[]): IProductos[]
  {
     return productosApis.map(Ap=> this.apiWpAdapter(Ap))
  }
}
