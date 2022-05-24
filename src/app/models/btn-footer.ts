export class BtnFooter {
    id:number
    texto: string
    icono: string
    enlace: string
    tipoEnlace: string

    constructor(
        id:number,
        texto: string,
        icono: string,
        enlace: string,
        tipoEnlace: string
    ) {
        this.id = id
        this.texto = texto
        this.icono = icono
        this.enlace = enlace
        this.tipoEnlace = tipoEnlace
    }
}
