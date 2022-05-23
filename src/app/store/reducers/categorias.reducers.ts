import { createReducer, on } from '@ngrx/store';
import { categoriasListAction } from '../actions/categorias.actions';
import { IcategoriasState } from '../../interfaces/states/icategorias.state';


export const categoriasInitialState: IcategoriasState = { loading: false, items: [] };

export const categoriasReducer = createReducer(categoriasInitialState, on(categoriasListAction, state => state))
