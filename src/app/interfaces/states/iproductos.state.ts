import { IProductos } from '../IProductos';
export interface IproductosState {
	loading: boolean,
	items: ReadonlyArray<IProductos>

}