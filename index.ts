import express from 'express';
import { Producto } from "./producto";

const app: express.Application = express();

const port = 3000;

let producto1 = new Producto(1, "Mesa de Comedor", 500, "2022-05-12");
let producto2 = new Producto(2, "Cama Doble", 800, "2022-09-08");
let producto3 = new Producto(3, "Sofá de Cuero", 1000, "2022-02-21");
let producto4 = new Producto(4, "TV de 50 Pulgadas", 600, "2022-06-19");
let producto5 = new Producto(5, "Lavadora de Carga Frontal", 700, "2022-04-05");

let productos = new Array<Producto>();

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);

app.use(express.json());

app.get('/',(_req , _res) => _res.send('Anda la API, ya estamos cerca de la liberación.'));

//listado con los productos
app.get("/productos", (_req,_res) => {
    _res.json(productos);
})

//Encontrar productos por ID
app.get("/productos/:id", (_req,_res) => {
    _res.json(productos.find(item => {
        return item.id == Number (_req.params.id)
    }));
})

//SE VIENE EL ABM DE PRODUCTO$$$

//(A)GREGAR PRODUCTOS
app.post("/productos",(_req,_res) => {
    for(let i: number = 0; i < productos.length; i++){
        if(productos[i].id == Number(_req.body.id)){
            _res.send("Problema al crear producto");
            return;
        }
    }
    const productoRand = new Producto(_req.body.id, _req.body.nombre, _req.body.precio, _req.body.fechaPrecio);
    productos.push(productoRand);
    _res.json(productoRand);
})

//(B)ORRAR PRODUCTOS
app.delete("/productos/:id", (_req,_res) => {
    const productoRand = productos.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (productoRand){
        productos.splice(productos.indexOf(productoRand), 1)
    }
    _res.status(204).send()
})

//(M)ODIFICAR PRODUCTOS
app.patch("/productos/:id", (_req,_res) => {
    const productoRand = productos.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (productoRand){
        if(_req.body.id){
            productoRand.id = _req.body.id;
        }
        if(_req.body.nombre){
            productoRand.nombre = _req.body.nombre;
        }
        if(_req.body.avatar){
            productoRand.precio = _req.body.precio;
        }
        if(_req.body.fechaPrecio){
            productoRand.fechaPrecio = _req.body.fechaPrecio;
        }
        _res.json(productoRand)
    }
    else{
        _res.status(404).send()
    }
})


//METODOS PERSONALIZADOS
//Buscar por fecha
app.get("/productos/buscarFecha/:fechaPrecio", (_req, _res) => {
    var productosEncontrados: Array<Producto> = new Array<Producto>;
    for(let i:number = 0; i < productos.length;i++){
        if(productos[i].fechaPrecio.includes(_req.params.fechaPrecio)){
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
})

//Buscar por precio
app.get("/productos/buscarPrecio/:precio", (_req, _res) => {
    var productosEncontrados: Array<Producto> = new Array<Producto>;
    for(let i:number = 0; i < productos.length;i++){
        if(productos[i].precio.toString().includes(_req.params.precio)){
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
})

//Buscar por nombre
app.get("/productos/buscarNombre/:nombre", (_req, _res) => {
    var productosEncontrados: Array<Producto> = new Array<Producto>;
    for(let i:number = 0; i < productos.length;i++){
        if(productos[i].nombre.includes(_req.params.nombre)){
            productosEncontrados.push(productos[i]);
        }
    }
    _res.json(productosEncontrados);
})

app.listen(port, () => console.log(`Estoy en el puerto ${port}!`));




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


