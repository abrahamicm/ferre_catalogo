
export interface APIProducto {
    id:               number;
    link:             string;
    title:            GUID;

    ferre_categorias: number[];
    acf:              Acf;

}

export interface Acf {
    sku:    string;
    mm:     string;
    mts:    string;
    medida: string;
    peso:   string;
    precio: string;
}

export interface GUID {
    rendered: string;
}

