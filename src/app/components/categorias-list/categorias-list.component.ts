import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ICategorias } from 'src/app/interfaces/icategorias';
import { Categoria } from 'src/app/models/categoria';
import { ApiCatalogoService } from 'src/app/services/api-catalogo.service';
import { IcategoriasAdaprterService } from 'src/app/services/icategorias-adaprter.service';
import { map, tap } from 'rxjs/operators';
import { APICategorias } from 'src/app/interfaces/apicategorias';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { CategoriasApiService } from '../../services/api/categorias-api.service';
import { Store } from '@ngrx/store';
import { categoriasLoadAction } from 'src/app/store/actions/categorias.actions';
import { Observable } from 'rxjs';
import { selectFeatureCategoriasItems, selectFeatureCategoriasLoading } from '../../store/selectors/categorias.selectors';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit {


  categorias$: Observable<any> = new Observable()
  loading$: Observable<any> = new Observable()

  constructor(private store: Store<any>) {
    this.store.dispatch(categoriasLoadAction())
  }
  ngOnInit() {
    this.categorias$ = this.store.select(selectFeatureCategoriasItems)
    this.loading$ = this.store.select(selectFeatureCategoriasLoading)
  }
}






