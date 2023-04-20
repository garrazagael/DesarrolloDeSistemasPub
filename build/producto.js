"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
class Producto {
    constructor(id, nombre, precioxfecha) {
        this.id = id;
        this.nombre = nombre;
        this.precioxfecha = new Array;
    }
    getID() {
        return this.id;
    }
    setID(ID) {
        this.id = ID;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecioxFecha() {
        return this.getPrecioxFecha;
    }
}
exports.Producto = Producto;
