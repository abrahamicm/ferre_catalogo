import { Component, Input, OnInit } from '@angular/core';
import { BaseMaterial } from '../../models/base-material';
import { IProductos } from '../../interfaces/IProductos';
import { Store } from '@ngrx/store';
import { productosLoadAction } from '../../store/actions/productos.actions';
import { Observable } from 'rxjs';
import { selectFeatureProductosItems, selectFeatureProductosLoading } from 'src/app/store/selectors/productos.selectors';
import { selectFeatureSedeId } from '../../store/selectors/sedes.selectors';


@Component({
  selector: 'app-base-material-list',
  templateUrl: './base-material-list.component.html',
  styleUrls: ['./base-material-list.component.scss'],
})
export class BaseMaterialListComponent implements OnInit {
  productos$: Observable<any> = new Observable()
  loading$: Observable<any> = new Observable()
  sedeId$: Observable<any> = new Observable()


  constructor(private store: Store<any>) {


  }


  @Input() lista: IProductos[]

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
    this.sedeId$.subscribe(x => {
      console.log(x)
      this.store.dispatch(productosLoadAction({ sedeId: x }))
    })


  }
}