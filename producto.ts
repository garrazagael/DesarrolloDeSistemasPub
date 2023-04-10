export class Producto{
    id: Number;
    nombre: String;
    precio: Number;
    fechaPrecio: String;

    constructor(id: Number, nombre: String, precio:Number, fechaPrecio: String) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.fechaPrecio = fechaPrecio;
    }

    public getID(): Number {
        return this.id
    }
    public setID(ID: Number): void {
        this.id = ID
    }

    public getNombre(): String {
        return this.nombre;
    }

    public setNombre(nombre: String): void {
        this.nombre = nombre;
    }

    public getPrecio(): Number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getFechaPrecio(){
        return this.fechaPrecio
    }

    public setFechaPrecio(fechaprecio: String): void {
        this.fechaPrecio = fechaprecio
    }
}