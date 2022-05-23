import { IproductosState } from '../interfaces/states/iproductos.state';
import { IcategoriasState } from '../interfaces/states/icategorias.state';
import { IsedesState } from '../interfaces/states/isedes.state';
import { IVendedoresState } from '../interfaces/states/ivendedores.state';
import { IfooterItemsState } from '../interfaces/states/ifooter-items.state';
import { ActionReducerMap } from '@ngrx/store';
import { productosReducer } from './reducers/producto.reducers';
import { categoriasReducer } from './reducers/categorias.reducers';
import { sedesReducer } from './reducers/sedes.reducers';
import { vendedoresReducer } from './reducers/vendedores.reducers';
import { footerReducer } from './reducers/footer-items.reducers';


export interface AppState {
	productos: IproductosState,
	categorias: IcategoriasState,
	sedes: IsedesState,
	vendedores: IVendedoresState,
	footer: IfooterItemsState,



}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
	productos: productosReducer,
	categorias: categoriasReducer,
	sedes: sedesReducer,
	vendedores: vendedoresReducer,
	footer: footerReducer
}