import { createReducer, on } from '@ngrx/store';

import { IcategoriasState } from '../../interfaces/states/icategorias.state';
import { categoriasLoadAction, categoriasLoadedAction } from '../actions/categorias.actions';


export const categoriasInitialState: IcategoriasState = { loading: false, items: [] };

export const categoriasReducer = createReducer(categoriasInitialState
	, on(categoriasLoadAction, state => { return { ...state, loading: true } })
	, on(categoriasLoadedAction, (state, { items }) => {
		return { ...state, loading: false, items }
	}))
