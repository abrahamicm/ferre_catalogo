import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IsedesState } from '../../interfaces/states/isedes.state';
import { sedeSelectedAction } from '../actions/sedes.actions';


export const selectSedesFeature = (state: AppState) => state.sedes;

export const selectFeatureSedesItems = createSelector(
	selectSedesFeature,
	(state: IsedesState) => state.items
);

export const selectFeatureSedesLoading = createSelector(
	selectSedesFeature,
	(state: IsedesState) => state.loading
);

export const selectFeatureSedeId = createSelector(
	selectSedesFeature,
	(state: IsedesState) => state.sedeId
);