import { createReducer, on } from '@ngrx/store';

import { IsedesState } from '../../interfaces/states/isedes.state';
import { sedesLoadAction, sedesLoadedAction, sedeSelectedAction } from '../actions/sedes.actions';
/*
sedesLoadAction
sedesLoadedAction
 */
export const sedesInitialState: IsedesState = { loading: false, items: [], sedeId: null };

export const sedesReducer = createReducer(sedesInitialState,
	on(sedesLoadAction, state => { return { ...state, loading: true } })
	, on(sedesLoadedAction, (state, { items }) => {
		return { ...state, loading: false, items }
	})
	, on(sedeSelectedAction, (state, { sedeId }) => {
		return { ...state, loading: false, sedeId }
	})

)
