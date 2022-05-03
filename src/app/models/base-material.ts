export class BaseMaterial {
    private _id: string
    private _mm: string
    private _medida: string
    private _peso: string
    private _precio: string
    private _existencia: number


    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }
    public get mm(): string {
        return this._mm
    }
    public set mm(value: string) {
        this._mm = value
    }
    public get medida(): string {
        return this._medida
    }
    public set medida(value: string) {
        this._medida = value
    }
    public get peso(): string {
        return this._peso
    }
    public set peso(value: string) {
        this._peso = value
    }
    public get precio(): string {
        return this._precio
    }
    public set precio(value: string) {
        this._precio = value
    }
    public get existencia(): number {
        return this._existencia
    }
    public set existencia(value: number) {
        this._existencia = value
    }

  
}
