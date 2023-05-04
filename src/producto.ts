import { registroPrecioxFecha } from "./registroPrecioxFecha";

export class Producto {
    id: Number; 
    nombre: String;
    precioxfecha: Array<registroPrecioxFecha>

    constructor(id: Number, nombre: String, precioxfecha: Array<registroPrecioxFecha>) {
        this.id = id;
        this.nombre = nombre;
        this.precioxfecha = new Array<registroPrecioxFecha>;
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

    public getPrecioxFecha() {
        return this.getPrecioxFecha
    }
}