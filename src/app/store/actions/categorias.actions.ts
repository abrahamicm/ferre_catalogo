import { createAction, props } from '@ngrx/store';
import { ICategorias } from '../../interfaces/icategorias';


export const categoriasLoadAction = createAction('[Categorias] Load');
export const categoriasLoadedAction = createAction('[Categorias] Loaded Items', props<{ items: ICategorias[] }>());
