import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { SedesApiService } from 'src/app/services/api/sedes-api.service';
import { Router } from '@angular/router';
@Injectable()
export class SedesEffects {
	loadSedes$ = createEffect(() => this.actions$.pipe(
		ofType('[Sedes] Load'),
		mergeMap(() => this.sedesService.getAll()
			.pipe(
				map(sedes => ({ type: '[Sedes] Loaded Items', items: sedes })),
				catchError((e) => { console.log(e); return EMPTY })
			))
	)
	);

	// loginSuccess$ = this.actions$.pipe(
	// 	ofType('[Sede] seledted'),
	// 	map(x => x),
	// 	tap(() => this.router.navigate(['/home'])),
	// 	catchError((e) => { console.log(e); return EMPTY })
	// );
	constructor(
		private actions$: Actions,
		private sedesService: SedesApiService,
		private router: Router
	) { }
}
