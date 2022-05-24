export interface IProductos {
    id?: string,
    mm?: string,
    nombre?: string,
    medida?: string,
    marca?: string,
    peso?: string,
    precio: string,
    existencia?: number,
    mts?: number,
    ferre_categorias?: number[];
    ferre_sedes?: number[];
}