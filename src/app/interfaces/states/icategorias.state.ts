import { ICategorias } from '../icategorias';

export interface IcategoriasState {
	loading: boolean,
	items: ReadonlyArray<ICategorias>
}