import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { APIProducto } from '../interfaces/APIProducto';
import { IProductos } from '../interfaces/IProductos';
import {map} from 'rxjs/operators'
import { ICategorias } from '../interfaces/icategorias';
import { APICategorias } from '../interfaces/apicategorias';

@Injectable({
  providedIn: 'root'
})
export class ApiCatalogoService {

  constructor(private http: HttpClient) { }

  getCategorias():Observable<APICategorias> {

    return this.http.get<APICategorias>(environment.API_URL+'ferre_categorias')
  }

  getProductos():Observable<APIProducto>{
    return this.http.get<APIProducto>(environment.API_URL+'ferre-producto')
    
  }
}