import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiCatalogoService {

  constructor(private http: HttpClient) { }

  getCategorias() {

    this.http.get(environment.API_URL+'ferre_categorias').subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  getProductos(){
    this.http.get(environment.API_URL+'ferre-producto').subscribe(data => {
      console.log(data);
    });
    
  }
}