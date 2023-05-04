import express, { json } from "express";
import { modeloProducto } from "../models/modeloProducto";
import { modeloPrXFe } from "../models/modeloPrxFe";
import { modeloUsuario } from "../models/modeloUsuario";

export default {
//Productos
    //Mostrar todos los Productos
    get_todos_productos: async (_req: express.Request, _res: express.Response) => {
        const output = await modeloProducto.find()
        //return output
        _res.status(200).send(output)
    },
    //Mostrar Productos por Nombre
    get_productos_nombre: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloProducto.find({ "nombre": _req.params.nombre })
        //return output
        _res.status(200).send(output)
    },
    //Mostrar Productos por ID
    get_productos_id: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloProducto.find({ "id": _req.params.id })
        //return output
        _res.status(200).send(output)
    },
    //Borrar Productos por Nombre
    delete_producto_nombre: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloProducto.findOneAndDelete({ "nombre": _req.params.nombre })
        //return ("Se elimino")
        _res.status(200).send("Se elimino")
    },
    //Borrar productos por ID
    delete_producto_id: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloProducto.findOneAndDelete({ "id": _req.params.id })
        //return ("Se elimino")
        _res.status(200).send("Se elimino")
    },
    // Modificar Producto por Nombre
    patch_producto_nombre: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await modeloProducto.findOneAndUpdate({ "nombre": _req.params.nombre }, _req.body)
        let output_post_patch = await modeloProducto.find({ "nombre": _req.params.nombre })
        //return output_post_patch
        _res.status(200).send(output_post_patch)
    },
    // Modificar Producto por ID
    patch_producto_id: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await modeloProducto.findOneAndUpdate({ "id": _req.params.nombre }, _req.body)
        let output_post_patch = await modeloProducto.find({ "id": _req.params.id })
        //return output_post_patch
        _res.status(200).send(output_post_patch)
    },
    // Crear Producto
    post_producto: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloProducto.create(_req.body)
        //return output
        _res.status(200).send(output)
    },
    // Crear Producto y reemplazarlo si ya esta creado 
    put_producto: async (_req: express.Request, _res: express.Response) => {
        let output_pre_put = await modeloProducto.findOneAndReplace({ "nombre": _req.params.nombre }, _req.body)
        let output_post_put = await modeloProducto.find({ "nombre": _req.params.nombre })
        //return output_post_put
        _res.status(200).send(output_post_put)
    },

//Registros de Precio y Fecha
    //Mostrar todos los registros de Precio y Fecha
    get_todos_registros: async (_req: express.Request, _res: express.Response) => {
        const output = await modeloPrXFe.find()
        //return output
        _res.status(200).send(output)
    },
    //Mostrar Registro x Precio
    get_precio_registro: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloPrXFe.find({ "precio": _req.params.precio })
        //return output
        _res.status(200).send(output)
    },
    //Mostrar Registro x Fecha
    get_fecha_registro: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloPrXFe.find({ "fecha": _req.params.fecha })
        //return output
        _res.status(200).send(output)
    },
    //Borrar Registro x Precio
    delete_registro_precio: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloPrXFe.findOneAndDelete({ "precio": _req.params.precio })
        return ("Se elimino")
        //_res.status(200).send("Eliminau")
    },
    //Borrar Registro x Fecha
    delete_registro_fecha: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloPrXFe.findOneAndDelete({ "fecha": _req.params.fecha })
        //return ("Se elimino")
        _res.status(200).send("Eliminau")
    },
    // Modificar Registro x Precio
    patch_registro_precio: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await modeloPrXFe.findOneAndUpdate({ "precio": _req.params.precio }, _req.body)
        let output_post_patch = await modeloPrXFe.find({ "precio": _req.params.precio })
        //return output_post_patch
        _res.status(200).send(output_post_patch)
    },
    // Modificar Registro x Fecha
    patch_registro_fecha: async (_req: express.Request, _res: express.Response) => {
        let output_pre_patch = await modeloPrXFe.findOneAndUpdate({ "fecha": _req.params.fecha }, _req.body)
        let output_post_patch = await modeloPrXFe.find({ "fecha": _req.params.fecha })
        //return output_post_patch
        _res.status(200).send(output_post_patch)
    },
    // Crear Registro
    post_registro: async (_req: express.Request, _res: express.Response) => {
        let output = await modeloPrXFe.create(_req.body)
        //return output
        _res.status(200).send(output)
    },
    // Crear Producto y reemplazarlo si ya esta creado 
    put_registro: async (_req: express.Request, _res: express.Response) => {
        let output_pre_put = await modeloPrXFe.findOneAndReplace({ "precio": _req.params.precio }, _req.body)
        let output_post_put = await modeloPrXFe.find({ "fecha": _req.params.fecha })
        //return output_post_put
        _res.status(200).send(output_post_put)
    }
}