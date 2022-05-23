import { createAction, props } from '@ngrx/store';
import { IproductosState } from '../../interfaces/states/iproductos.state';

export const productosLoadAction = createAction('[Productos] Load');
export const productosLoadedAction = createAction('[Productos] Loaded Items', props<{ productos: IproductosState }>());