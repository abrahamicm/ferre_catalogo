import { IVendedores } from '../i-vendedores';
export interface IVendedoresState {
	loading: boolean,
	items: ReadonlyArray<IVendedores>

}