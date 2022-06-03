export interface IProductos {
    id?: string,
    mm?: string,
    nombre?: string,
    medida?: string,
    marca?: string,
    peso?: string,
    precio: string,
    existencia?: number,
    mts?: string,
    ferre_categorias?: number[];
    ferre_sedes?: number[];
    tipo?: string,
    subtipo?: string,
    espesor?: string,
    mostrarTipo?,
    mostrarSubTipo?,
    Largo?: string,
    Ancho?: string
}