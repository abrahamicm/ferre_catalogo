import { createReducer, on } from '@ngrx/store';

import { IproductosState } from '../../interfaces/states/iproductos.state';
import { productosLoadAction } from '../actions/productos.actions';

export const productosInitialState: IproductosState = { loading: false, items: [] };

export const productosReducer = createReducer(productosInitialState,
	on(productosLoadAction, state => { return { ...state, loading: true } }))











