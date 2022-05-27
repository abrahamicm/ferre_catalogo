import { createReducer, on } from '@ngrx/store';

import { IcategoriasState } from '../../interfaces/states/icategorias.state';
import { categoriaSelectedAction, categoriasLoadAction, categoriasLoadedAction } from '../actions/categorias.actions';


export const categoriasInitialState: IcategoriasState = { loading: false, items: [], categoriaId: null, categoriaSlug: null, categoriaBanner: null, cabeceras: [] };

export const categoriasReducer = createReducer(categoriasInitialState
	, on(categoriasLoadAction, state => { return { ...state, loading: true } })
	, on(categoriasLoadedAction, (state, { items }) => {
		return { ...state, loading: false, items }
	}),
	on(categoriaSelectedAction, (state, {
		categoriaId,
		categoriaSlug,
		categoriaBanner, cabeceras }) => {
		return {
			...state,
			loading: false,
			categoriaId,
			categoriaSlug,
			categoriaBanner,
			cabeceras
		}
	})
)

