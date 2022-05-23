import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ICategorias } from 'src/app/interfaces/icategorias';
import { Categoria } from 'src/app/models/categoria';
import { ApiCatalogoService } from 'src/app/services/api-catalogo.service';
import { IcategoriasAdaprterService } from 'src/app/services/icategorias-adaprter.service';
import { map, tap } from 'rxjs/operators';
import { APICategorias } from 'src/app/interfaces/apicategorias';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements AfterViewChecked {


  categorias: ICategorias[] = [];
  categoriasApi: APICategorias[] = [];
  respuesta = [];
  banner: string


  //categoriasApi:any;
  compareFn = (a, b) => {
    if (a.orden < b.orden)

      return -1;
    if (a.orden > b.orden)
      return 1;
    return 0;
  };

  constructor(private http: HttpClient, private ics: IcategoriasAdaprterService) {
    this.http.get<APICategorias[]>(environment.API_URL + 'ferre_categorias').pipe(
      map(x => ics.converApiPToIc(x)

      )


    ).subscribe(x => {

      this.categorias = x
      this.categorias.sort(this.compareFn)
    })

  }
  ngAfterViewChecked() {


  }


}






