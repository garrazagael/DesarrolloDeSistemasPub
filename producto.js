"use strict";
exports.__esModule = true;
var Producto = /** @class */ (function () {
    function Producto(id, nombre, precio, fechaPrecio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.fechaPrecio = fechaPrecio;
    }
    Producto.prototype.getID = function () {
        return this.id;
    };
    Producto.prototype.setID = function (ID) {
        this.id = ID;
    };
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Producto.prototype.getPrecio = function () {
        return this.precio;
    };
    Producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Producto.prototype.getFechaPrecio = function () {
        return this.fechaPrecio;
    };
    Producto.prototype.setFechaPrecio = function (fechaprecio) {
        this.fechaPrecio = fechaprecio;
    };
    return Producto;
}());
exports.Producto = Producto;
