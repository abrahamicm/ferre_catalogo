import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcategoriasAdaprterService } from '../icategorias-adaprter.service';
import { APICategorias } from '../../interfaces/apicategorias';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriasApiService {

  constructor(private http: HttpClient, private ics: IcategoriasAdaprterService) { }

  getAll() {
    return this.http.get<APICategorias[]>(environment.API_URL + 'ferre_categorias').pipe(
      map(x => this.ics.converApiPToIc(x)
      ), map(
        x => x.sort((a, b) => (a.orden == b.orden) ? 0 : (a.orden < b.orden) ? -1 : 0)
      )
    )
  }
}
