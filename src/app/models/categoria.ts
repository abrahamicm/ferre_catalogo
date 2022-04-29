export class Categoria {
    id:number;
    nombre:string;
    imagen:string;
    link:string
    constructor(id:number,nombre:string,imagen:string,link:string=""){
        this.id = id;
        this.nombre = nombre
        this.imagen = imagen
        this.link = link
    }
}
