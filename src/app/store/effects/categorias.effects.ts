import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CategoriasApiService } from '../../services/api/categorias-api.service';
@Injectable()
export class CategoriasEffects {
	loadSedes$ = createEffect(() => this.actions$.pipe(
		ofType('[Categorias] Load'),
		mergeMap(() => this.api.getAll()
			.pipe(
				map(categorias => ({ type: '[Categorias] Loaded Items', items: categorias })),
				catchError(() => EMPTY)
			))
	)
	);

	constructor(
		private actions$: Actions,
		private api: CategoriasApiService
	) { }
}
