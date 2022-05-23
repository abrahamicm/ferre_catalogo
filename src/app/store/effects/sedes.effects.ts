import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SedesApiService } from 'src/app/services/api/sedes-api.service';
@Injectable()
export class SedesEffects {
	loadSedes$ = createEffect(() => this.actions$.pipe(
		ofType('[Sedes] Load'),
		mergeMap(() => this.sedesService.getAll()
			.pipe(
				map(sedes => ({ type: '[Sedes] Loaded Items', items: sedes })),
				catchError(() => EMPTY)
			))
	)
	);
	constructor(
		private actions$: Actions,
		private sedesService: SedesApiService
	) { }
}
