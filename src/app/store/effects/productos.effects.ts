import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ProductosApiService } from '../../services/api/productos-api.service';
@Injectable()
export class ProductosEffects {


	loadProductos$ = createEffect(() => this.actions$.pipe(
		ofType('[Productos] Load'),

		mergeMap((x) => this.productosService.getByCategory(x)
			.pipe(
				map(productos => ({ type: '[Productos] Loaded', items: productos })),
				tap(x => console.log(x)),


				catchError((e) => { console.log(e); return EMPTY })
			))
	)
	);
	constructor(
		private actions$: Actions,
		private productosService: ProductosApiService
	) { }
}
