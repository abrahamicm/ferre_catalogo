import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { productosLoadAction } from '../../store/actions/productos.actions';
import { Observable } from 'rxjs';
import { selectFeatureProductosItems, selectFeatureProductosLoading } from 'src/app/store/selectors/productos.selectors';
import { selectFeatureSedeId } from '../../store/selectors/sedes.selectors';
import { selectFeatureCategoria } from 'src/app/store/selectors/categorias.selectors';
import { map, mergeMap, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { IProductos } from 'src/app/interfaces/IProductos';
import { ProductosApiService } from '../../services/api/productos-api.service';



@Component({
  selector: 'app-base-material-list',
  templateUrl: './base-material-list.component.html',
  styleUrls: ['./base-material-list.component.scss'],
})
export class BaseMaterialListComponent implements OnInit {
  productos$: Observable<any> = new Observable()

  sedeId$: Observable<any> = new Observable()
  categoria_select$: Observable<any> = new Observable<any>();

  loading$: Observable<any> = new Observable()
  loading: any

  cabeceras: string
  productos: IProductos[]

  constructor(private store: Store<any>,
    public loadingController: LoadingController,
    private router: Router,
    private cd: ChangeDetectorRef,
    public o: ProductosApiService

  ) {
    this.loading = this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando datos',

    });
  }



  @Input() MM: string
  @Input() Mts: string
  @Input() Medida: string
  @Input() Marca: string
  @Input() Peso: string
  @Input() Precio: string
  @Input() Nombre: string
  ngOnInit() {


    this.productos$ = this.store.select(selectFeatureProductosItems)
    this.loading$ = this.store.select(selectFeatureProductosLoading)
    this.sedeId$ = this.store.select(selectFeatureSedeId)
    this.categoria_select$ = this.store.select(selectFeatureCategoria)
    this.loading$.subscribe(x => {
      if (x) {
        this.loading.then(x => x.present())
      } else {
        this.loading.then(x => x.dismiss())
      }
    })
    this.sedeId$.pipe(
      mergeMap(val1 => this.categoria_select$.pipe(
        map(val2 => [val1, val2['categoriaId']])
      ))

    )
      .subscribe(x => {



        this.store.dispatch(productosLoadAction({
          sedeId: x[0], categoriaId: x[1]

        }))
      }).unsubscribe()

    this.router.events.subscribe(
      x => {
        if (x instanceof NavigationEnd && x.urlAfterRedirects == "/portada") {

          this.loading.then(x => x.dismiss())
        }

      }
    )

    this.categoria_select$.subscribe(
      x => this.cabeceras = x.cabeceras.toString()
    );

    this.productos$.pipe(
      //tap(console.table)
    ).subscribe(
      x => {
        this.productos = x
      }
    )

  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }


}




