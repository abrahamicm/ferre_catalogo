import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFeatureCategoria } from 'src/app/store/selectors/categorias.selectors';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  loading$: Observable<any> = new Observable()
  categoria_select$: Observable<any> = new Observable<any>();

  banner_categoria: string
  constructor(private store: Store<any>) { }
  ngOnInit() {
    this.categoria_select$ = this.store.select(selectFeatureCategoria)
    this.categoria_select$.subscribe(
      (x) => {
        const _b = (x['categoriaBanner'] == null) ? "" : x['categoriaBanner']
        this.banner_categoria = _b

      }
    ).unsubscribe()
  }

}
