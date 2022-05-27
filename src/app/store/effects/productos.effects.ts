import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ProductosApiService } from '../../services/api/productos-api.service';
import { Router } from '@angular/router';
@Injectable()
export class ProductosEffects {


	loadProductos$ = createEffect(() => this.actions$.pipe(
		ofType('[Productos] Load'),

		mergeMap((x) => this.productosService.getByCategory(x)
			.pipe(
				map(productos => ({ type: '[Productos] Loaded', items: productos })),
				catchError((e) => { this.router.navigate(['/']); console.log(e); return EMPTY })
			))
	)
	);
	constructor(
		private actions$: Actions,
		private productosService: ProductosApiService,
		private router: Router
	) { }
}
