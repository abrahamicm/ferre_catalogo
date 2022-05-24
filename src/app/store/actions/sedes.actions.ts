import { createAction, props } from '@ngrx/store';
import { ISedes } from '../../interfaces/i-sedes';


export const sedesLoadAction = createAction('[Sedes] Load');
export const sedesLoadedAction = createAction('[Sedes] Loaded Items', props<{ items: ISedes[] }>());

export const sedeSelectedAction = createAction('[Sede] seledted', props<{ sedeId: number }>());

export const sedeNavegationAction = createAction('[Sede] navigation', props<{ sedeId: number }>());

