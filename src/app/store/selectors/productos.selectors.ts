import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IproductosState } from '../../interfaces/states/iproductos.state';


export const selectSedesFeature = (state: AppState) => state.productos;


export const selectFeatureProductosItems = createSelector(
	selectSedesFeature,
	(state: IproductosState) => state.items
);

export const selectFeatureProductosLoading = createSelector(
	selectSedesFeature,
	(state: IproductosState) => state.loading
);