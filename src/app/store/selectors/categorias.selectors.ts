import { createSelector } from '@ngrx/store';
import { Categoria } from 'src/app/models/categoria';
import { AppState } from '../app.state';
import { IcategoriasState } from '../../interfaces/states/icategorias.state';



export const selectSedesFeature = (state: AppState) => state.categorias;


export const selectFeatureCategoriasItems = createSelector(
	selectSedesFeature,
	(state: IcategoriasState) => state.items
);

export const selectFeatureCategoriasLoading = createSelector(
	selectSedesFeature,
	(state: IcategoriasState) => state.loading
);
