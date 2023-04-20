import express, { Application } from "express";
import { Producto } from "./producto"
import { registroPrecioxFecha } from "./registroPrecioxFecha";
import yaml from 'yaml';
import fs from 'fs';
import swagger_ui from "swagger-ui-express";

const PORT = 4250;
const documentou = fs.readFileSync( './swagger.yaml', 'utf-8' )

const app: Application = express();

app.get('/',(_req , _res) => _res.send('Anda la API, ya estamos cerca de la liberación.'));
app.use('/api-docs', swagger_ui.serve, swagger_ui.setup( yaml.parse(documentou)));


let lista_precioFecha = new Array<registroPrecioxFecha>();
let pf1 = new registroPrecioxFecha(320,"25-05-1990");
let pf2 = new registroPrecioxFecha(6560,"25-05-2021");
lista_precioFecha.push(pf1);
let producto1= new Producto(1,"Jabon", lista_precioFecha);
let producto2= new Producto(2,"Detergente", lista_precioFecha);
let lista_productos = new Array<Producto>();
lista_productos.push(producto1);
lista_productos.push(producto2);

//Encontrar productos
app.get("/productos", (_req,_res) => {
    return _res.json({"elements":lista_productos});
})

//Encontrar productos por ID
app.get("/productos/:id", (_req,_res) => {
    _res.json(lista_productos.find(item => {
        return item.id == Number (_req.params.id)
    }));
})

//(A)GREGAR PRODUCTOS
app.post("/agregar_productos/:id/:nombre",(_req,_res) => {
    for(let i: number = 0; i < lista_productos.length; i++){
        if(lista_productos[i].id == Number(_req.body.id)){
            _res.send("Problema al crear producto");
            return;
        }
    }
    const productoRand = new Producto(_req.body.id, _req.body.nombre, new Array<registroPrecioxFecha>);
    lista_productos.push(productoRand);
    _res.json(productoRand);
})


//METODOS PERSONALIZADOS

//Buscar por nombre
app.get("/productos/:nombre", (_req, _res) => {
    var productosEncontrados: Array<Producto> = new Array<Producto>;
    for(let i:number = 0; i < lista_productos.length;i++){
        if(lista_productos[i].nombre.includes(_req.params.nombre)){
            productosEncontrados.push(lista_productos[i]);
        }
    }
    _res.json(productosEncontrados);
})

//Buscar por precio
app.get("/productos/:precio", (_req, _res) => {
    var productosEncontrados: Array<Producto> = new Array<Producto>;
    for(let i:number = 0; i < lista_productos.length;i++){
        if(lista_productos[i].nombre.includes(_req.params.precio)){
            productosEncontrados.push(lista_productos[i]);
        }
    }
    _res.json(productosEncontrados);
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });