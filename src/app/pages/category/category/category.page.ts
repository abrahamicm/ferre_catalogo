import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { APIProducto } from 'src/app/interfaces/APIProducto';
import { IproductoAdapterService } from 'src/app/services/iproducto-adapter.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  lista = [];

  id_categoria: string
  slug_categoria: string
  banner_categoria: string

  constructor(
    private ar: ActivatedRoute,
    private http: HttpClient,
    private ipa: IproductoAdapterService
  ) {
    this.ar.params.subscribe(
      x => {

        this.id_categoria = x.id_categoria
        this.slug_categoria = x.slug_categoria
        this.banner_categoria = x.banner_categoria

      }
    )

  }

  listarProductosDeCategorias() {

    this.http.get<APIProducto[]>(environment.API_URL + "ferre-producto?ferre_categorias=" + this.id_categoria)
      .pipe(
        map(x => this.ipa.converApiPToIp(x))
      )
      .subscribe(x => this.lista = x)

  }

  ngOnInit() {
    this.listarProductosDeCategorias()

  }

}
