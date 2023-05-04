import express, { Application } from "express";
import mongoose from "mongoose";
import yaml from 'yaml';
import fs from 'fs';
import swagger_ui from "swagger-ui-express";
import { routerProducto } from "./routes/routerProducto";
import { routerHistorico } from "./routes/routerHistorico";
import { routerUsuario } from "./routes/routerUsuario";
import bodyParser from "body-parser";


const PORT = 4260;
const documentou = fs.readFileSync('./swagger.yaml', 'utf-8')

mongoose
    .set("strictQuery", false)
    .connect('mongodb://localhost:27017/TP-1')

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
      console.log("Connected successfully");
    });

const app: Application = express();

app.use(bodyParser.json())
app.get('/', (_req, _res) => _res.send('Anda la API, ya estamos cerca de la liberación.'));
app.use('/api-docs', swagger_ui.serve, swagger_ui.setup(yaml.parse(documentou)));

app.use("/productos" , routerProducto   );

app.use("/registros" , routerHistorico  );

app.use("/usuarios"  , routerUsuario    );

app.use("/auth"      , routerAuth       );

/*
let lista_precioFecha = new Array<registroPrecioxFecha>();
let pf1 = new registroPrecioxFecha(320, "25-05-1990");
let pf2 = new registroPrecioxFecha(6560, "25-05-2021");
lista_precioFecha.push(pf1);
let producto1 = new Producto(1, "Jabon", lista_precioFecha);
let producto2 = new Producto(2, "Detergente", lista_precioFecha);
let lista_productos = new Array<Producto>();
lista_productos.push(producto1);
lista_productos.push(producto2);
*/

/*
//Encontrar productos
app.get("/productos", (_req, _res) => {
    return _res.json({ "elements": lista_productos });
})

//Encontrar productos por ID
app.get("/productos/:id", (_req, _res) => {
    _res.json(lista_productos.find(item => {
        return item.id == Number(_req.params.id)
    }));
})

//(A)GREGAR PRODUCTOS
app.post("/agregar_productos/:id/:nombre", (_req, _res) => {
    for (let i: number = 0; i < lista_productos.length; i++) {
        if (lista_productos[i].id == Number(_req.body.id)) {
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
//Buscar por precio
*/

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});