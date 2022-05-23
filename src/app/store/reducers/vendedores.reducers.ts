import { createReducer, on } from '@ngrx/store';
import { vendedoresListAction } from '../actions/vendedores.actions';
import { IVendedoresState } from '../../interfaces/states/ivendedores.state';

export const vendedoresInitialState: IVendedoresState = { loading: false, items: [] };
export const vendedoresReducer = createReducer(vendedoresInitialState, on(vendedoresListAction, state => state))
