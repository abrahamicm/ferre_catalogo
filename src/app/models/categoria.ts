export class Categoria {
    id:number;
    nombre:string;
    imagen:string;
    link:string;

    nombre_1:string
    nombre_2:string

    constructor(id:number,nombre:string,imagen:string,link:string="",separador:number=0){
        this.id = id;
        this.nombre = nombre
        this.imagen = imagen
        this.link = link

        this.separarNombre(separador)
        
    }

    separarNombre(separador){
        if(separador==0){
            let nombre_longitud = this.nombre.length
            let mitad = Math.ceil(nombre_longitud/2)
            this.nombre_1 = this.nombre.substring(0,mitad)
            this.nombre_2 = this.nombre.substring(mitad)
        }
        else{
            this.nombre_1 = this.nombre.substring(0,separador)
            this.nombre_2 = this.nombre.substring(separador)
        }
    }

}
