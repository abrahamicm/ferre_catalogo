import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { categoriasLoadAction } from 'src/app/store/actions/categorias.actions';
import { Observable } from 'rxjs';
import { selectFeatureCategoriasItems, selectFeatureCategoriasLoading, selectFeatureCategoria } from '../../store/selectors/categorias.selectors';
import { categoriaSelectedAction } from '../../store/actions/categorias.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit {
  categorias$: Observable<any> = new Observable()
  loading$: Observable<any> = new Observable()
  categoria_select$: Observable<any> = new Observable<any>();

  constructor(private store: Store<any>, private router: Router) {
    this.store.dispatch(categoriasLoadAction())
  }
  ngOnInit() {
    this.categorias$ = this.store.select(selectFeatureCategoriasItems)
    this.loading$ = this.store.select(selectFeatureCategoriasLoading)
    this.categoria_select$ = this.store.select(selectFeatureCategoria)


  }
  metodo(categoriaId: number, categoriaSlug: string, categoriaBanner: string) {
    this.store.dispatch(categoriaSelectedAction({ categoriaId, categoriaSlug, categoriaBanner }))

    this.categoria_select$.subscribe(
      () => { this.router.navigate(['/category']) }
    ).unsubscribe()
  }

}







