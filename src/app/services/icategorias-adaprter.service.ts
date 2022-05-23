import { Injectable } from '@angular/core';
import { ICategorias } from '../interfaces/icategorias';
import { APICategorias } from '../interfaces/apicategorias';

@Injectable({
  providedIn: 'root'
})
export class IcategoriasAdaprterService {

  constructor() { }

  apiWpAdapter(wpCat: APICategorias): ICategorias {

    return {
      id: wpCat.id,
      nombre: wpCat.name,
      banner: wpCat.acf.banner.url,
      slug: wpCat.slug,
      orden: wpCat.acf.orden,
      link: wpCat.acf.banner.url,
    }
  }

  converApiPToIc(productosApis: APICategorias[]): ICategorias[] {
    return productosApis.map(Ap => this.apiWpAdapter(Ap))
  }
}
