import { Injectable } from '@angular/core';
import { IProductos } from '../interfaces/IProductos';
import { APIProducto } from '../interfaces/APIProducto';

import { ApiProductoOrderService } from './orden/api-producto-order.service';

@Injectable({
  providedIn: 'root'
})
export class IproductoAdapterService {


  constructor(
    private o: ApiProductoOrderService
  ) { }

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
      mts: wpProduct.acf.mts,
      ferre_categorias: wpProduct.ferre_categorias,
      ferre_sedes: wpProduct.ferre_sedes,
      tipo: wpProduct.acf.tipo,
      subtipo: wpProduct.acf.subtipo,
      mostrarTipo: wpProduct.mostrarTipo,
      mostrarSubTipo: wpProduct.mostrarSubTipo,
      espesor: wpProduct.acf.espesor,
      Ancho: wpProduct.acf.Ancho,
      Largo: wpProduct.acf.Largo
    }
  }
  adaptarTodos(productosApis: APIProducto[]): IProductos[] {
    let tipoArray = []
    let subTipoArray = []
    let actual: null | string;
    // primero hay que ordenar la respuesta que viene del api
    productosApis.sort(this.o.ordenarApiProductos)

    let salida = productosApis.map(Ap => {
      if (actual == Ap.acf.tipo || tipoArray.length == 0) {


      } else {
        subTipoArray = []

      }
      subTipoArray.push(Ap.acf.subtipo)
      actual = Ap.acf.tipo
      tipoArray.push(Ap.acf.tipo)


      Ap.mostrarSubTipo = subTipoArray.indexOf(Ap.acf.subtipo) == subTipoArray.lastIndexOf(Ap.acf.subtipo)



      Ap.mostrarTipo = tipoArray.indexOf(Ap.acf.tipo) == tipoArray.lastIndexOf(Ap.acf.tipo)

      return this.adaptarUno(Ap)
    })

    return salida


  }




}
