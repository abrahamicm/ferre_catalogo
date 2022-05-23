import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IsedesState } from '../../interfaces/states/isedes.state';


export const selectSedesFeature = (state: AppState) => state.sedes;

export const selectFeatureSedesItems = createSelector(
	selectSedesFeature,
	(state: IsedesState) => state.items
);

export const selectFeatureSedesLoading = createSelector(
	selectSedesFeature,
	(state: IsedesState) => state.loading
);