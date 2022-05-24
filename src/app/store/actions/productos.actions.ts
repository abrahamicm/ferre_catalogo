import { createAction, props } from '@ngrx/store';

import { IProductos } from '../../interfaces/IProductos';

export const productosLoadAction = createAction('[Productos] Load', props<{ sedeId: number }>());
export const productosLoadedAction = createAction('[Productos] Loaded', props<{ items: IProductos[] }>());