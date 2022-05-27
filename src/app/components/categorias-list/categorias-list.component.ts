import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { categoriasLoadAction } from 'src/app/store/actions/categorias.actions';
import { Observable } from 'rxjs';
import { selectFeatureCategoriasItems, selectFeatureCategoriasLoading, selectFeatureCategoria } from '../../store/selectors/categorias.selectors';
import { categoriaSelectedAction } from '../../store/actions/categorias.actions';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss'],
})
export class CategoriasListComponent implements OnInit {
  categorias$: Observable<any> = new Observable()
  loading$: Observable<any> = new Observable()
  categoria_select$: Observable<any> = new Observable<any>();
  loading: any

  constructor(private store: Store<any>, private router: Router,
    public loadingController: LoadingController
  ) {
    this.store.dispatch(categoriasLoadAction())
    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando datos',

    });
  }
  ngOnInit() {
    this.categorias$ = this.store.select(selectFeatureCategoriasItems)
    this.loading$ = this.store.select(selectFeatureCategoriasLoading)
    this.categoria_select$ = this.store.select(selectFeatureCategoria)

    this.loading$.subscribe(x => {
      if (x) {
        this.loading.then(x => x.present())
      } else {
        this.loading.then(x => x.dismiss())
      }
    })

  }
  metodo(categoriaId: number, categoriaSlug: string, categoriaBanner: string, cabeceras: string[]) {

    this.store.dispatch(categoriaSelectedAction({ categoriaId, categoriaSlug, categoriaBanner, cabeceras }))

    this.categoria_select$.subscribe(
      () => { this.router.navigate(['/category']) }
    ).unsubscribe()
  }

}







