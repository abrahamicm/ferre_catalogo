import { ICategorias } from '../icategorias';

export interface IcategoriasState {
	loading: boolean,
	items: ReadonlyArray<ICategorias>,
	categoriaId: number
	categoriaSlug: string,
	categoriaBanner: string,
	cabeceras: string[]
}
