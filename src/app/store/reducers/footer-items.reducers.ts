import { createReducer, on } from '@ngrx/store';
import { IFooterItems } from '../../interfaces/i-footer-items';
import { footerItemsListAction } from '../actions/footer-items.actions';
import { IfooterItemsState } from '../../interfaces/states/ifooter-items.state';


export const footerInitialState: IfooterItemsState = { loading: false, items: [] };

export const footerReducer = createReducer(footerInitialState, on(footerItemsListAction, state => state))
