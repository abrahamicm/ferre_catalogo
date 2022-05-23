import { createAction, props } from '@ngrx/store';
import { ISedes } from '../../interfaces/i-sedes';



/*
export const productosLoadAction = createAction('[Productos] Load');
export const productosLoadedAction = createAction('[Productos] Loaded Items', props<{ productos: IproductosState }>());
*/
export const sedesLoadAction = createAction('[Sedes] Load');
export const sedesLoadedAction = createAction('[Sedes] Loaded Items', props<{ items: ISedes[] }>());
