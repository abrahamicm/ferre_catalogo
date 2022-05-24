import { Injectable } from '@angular/core';
import { IproductoAdapterService } from '../iproducto-adapter.service';
import { HttpClient } from '@angular/common/http';
import { IProductos } from '../../interfaces/IProductos';
import { APIProducto } from '../../interfaces/APIProducto';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosApiService {

  constructor(private h: HttpClient, private s: IproductoAdapterService) { }

  getAll(): Observable<IProductos[]> {
    return this.h.get<APIProducto[]>(environment.API_URL + 'ferre-producto').pipe(
      map(x => this.s.adaptarTodos(x))
    )
  }

  getByCategory(x): Observable<IProductos[]> {
    console.log(x.sedeId, "getByCategory")
    return this.h.get<APIProducto[]>(environment.API_URL + 'ferre-producto?ferre_sedes=' + x.sedeId).pipe(
      map(x => this.s.adaptarTodos(x))
    )
  }
}
