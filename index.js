"use strict";
exports.__esModule = true;
var express_1 = require("express");
var producto_1 = require("./producto");
var app = express_1["default"]();
var port = 3000;
var producto1 = new producto_1.Producto(1, "Mesa de Comedor", 500, "2022-05-12");
var producto2 = new producto_1.Producto(2, "Cama Doble", 800, "2022-09-08");
var producto3 = new producto_1.Producto(3, "Sofá de Cuero", 1000, "2022-02-21");
var producto4 = new producto_1.Producto(4, "TV de 50 Pulgadas", 600, "2022-06-19");
var producto5 = new producto_1.Producto(5, "Lavadora de Carga Frontal", 700, "2022-04-05");
var productos = new Array();
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
app.use(express_1["default"].json());
app.get('/', function (_req, _res) { return _res.send('Anda la API, ya estamos cerca de la liberación.'); });
//listado con los productos
app.get("/productos", function (_req, _res) {
    _res.json(productos);
});
//Encontrar productos por ID
app.get("/productos/:id", function (_req, _res) {
    _res.json(productos.find(function (item) {
        return item.id == Number(_req.params.id);
    }));
});
//SE VIENE EL ABM DE PRODUCTO$$$
//(A)GREGAR PRODUCTOS
app.post("/productos", function (_req, _res) {
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].id == Number(_req.body.id)) {
            _res.send("Problema al crear producto");
            return;
        }
    }
    var productoRand = new producto_1.Producto(_req.body.id, _req.body.nombre, _req.body.precio, _req.body.fechaPrecio);
    productos.push(productoRand);
    _res.json(productoRand);
});
//(B)ORRAR PRODUCTOS
app["delete"]("/productos/:id", function (_req, _res) {
    var productoRand = productos.find(function (item) {
        return item.id == Number(_req.params.id);
    });
    if (productoRand) {
        productos.splice(productos.indexOf(productoRand), 1);
    }
    _res.status(204).send();
});
//(M)ODIFICAR PRODUCTOS
app.patch("/productos/:id", function (_req, _res) {
    var productoRand = productos.find(function (item) {
        return item.id == Number(_req.params.id);
    });
    if (productoRand) {
        if (_req.body.id) {
            productoRand.id = _req.body.id;
        }
        if (_req.body.nombre) {
            productoRand.nombre = _req.body.nombre;
        }
        if (_req.body.avatar) {
            productoRand.precio = _req.body.precio;
        }
        if (_req.body.fechaPrecio) {
            productoRand.fechaPrecio = _req.body.fechaPrecio;
        }
        _res.json(productoRand);
    }
    else {
        _res.status(404).send();
    }
});
//METODOS PERSONALIZADOS
//Buscar por fecha
app.get("/productos/buscarFecha/:fechaPrecio", function (_req, _res) {
    var productosEncontrados = new Array();
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].fechaPrecio.includes(_req.params.fechaPrecio)) {
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
});
//Buscar por precio
app.get("/productos/buscarPrecio/:precio", function (_req, _res) {
    var productosEncontrados = new Array();
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].precio.toString().includes(_req.params.precio)) {
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
});
//Buscar por nombre
app.get("/productos/buscarNombre/:nombre", function (_req, _res) {
    var productosEncontrados = new Array();
    for (var i = 0; i < productos.length; i++) {
        if (productos[i].nombre.includes(_req.params.nombre)) {
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
});
app.listen(port, function () { return console.log("Estoy en el puerto " + port + "!"); });
// console.log(producto.id, producto.nombre, producto.precio, producto.fechaPrecio);
/*
function buscarPorFecha(productos: Producto[]): void {
    const fechaStr = prompt('Ingrese la fecha que desea encontrar (YY-MM-DD): ');
    const fecha = fechaStr;
    console.log("Los precios de los productos en esa fecha fueron:");
    for(var i of productos){
        if(i.fechaPrecio == fecha){
            console.log(i.nombre + ' - $' +i.precio);
        }
    }
}

function buscarPorPrecio(productos: Producto[]): void {
    const precioStr = prompt('Ingrese el precio que desea encontrar: ');
    const precio = precioStr;
    console.log("Los productos con esos precios son:");
    for(var i of productos){
        if(i.precio == precio){
            console.log(i.nombre + ' - ' +i.fechaPrecio);
        }
    }
}

let productosPorID: void = buscarPorID(productos);
let productosPorFecha: void = buscarPorFecha(productos);
let productosPorPrecio: void = buscarPorPrecio(productos);


*/
