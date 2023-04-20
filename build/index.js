"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const producto_1 = require("./producto");
const registroPrecioxFecha_1 = require("./registroPrecioxFecha");
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const PORT = 4240;
const documentou = fs_1.default.readFileSync('./swagger.yaml', 'utf-8');
const app = (0, express_1.default)();
app.get('/', (_req, _res) => _res.send('Anda la API, ya estamos cerca de la liberación.'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(yaml_1.default.parse(documentou)));
let lista_precioFecha = new Array();
let pf1 = new registroPrecioxFecha_1.registroPrecioxFecha(320, "25-05-1990");
let pf2 = new registroPrecioxFecha_1.registroPrecioxFecha(6560, "25-05-2021");
lista_precioFecha.push(pf1);
let producto1 = new producto_1.Producto(1, "Jabon", lista_precioFecha);
let producto2 = new producto_1.Producto(2, "Detergente", lista_precioFecha);
let lista_productos = new Array();
lista_productos.push(producto1);
lista_productos.push(producto2);
//Encontrar productos
app.get("/productos", (_req, _res) => {
    return _res.json({ "elements": lista_productos });
});
//Encontrar productos por ID
app.get("/productos/:id", (_req, _res) => {
    _res.json(lista_productos.find(item => {
        return item.id == Number(_req.params.id);
    }));
});
//(A)GREGAR PRODUCTOS
app.post("/agregar_productos/:id/:nombre", (_req, _res) => {
    for (let i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].id == Number(_req.body.id)) {
            _res.send("Problema al crear producto");
            return;
        }
    }
    const productoRand = new producto_1.Producto(_req.body.id, _req.body.nombre, new Array);
    lista_productos.push(productoRand);
    _res.json(productoRand);
});
//METODOS PERSONALIZADOS
//Buscar por nombre
app.get("/productos/:nombre", (_req, _res) => {
    var productosEncontrados = new Array;
    for (let i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].nombre.includes(_req.params.nombre)) {
            productosEncontrados.push(lista_productos[i]);
        }
    }
    _res.json(productosEncontrados);
});
//Buscar por precio
app.get("/productos/:precio", (_req, _res) => {
    var productosEncontrados = new Array;
    for (let i = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].nombre.includes(_req.params.precio)) {
            productosEncontrados.push(lista_productos[i]);
        }
    }
    _res.json(productosEncontrados);
});
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
