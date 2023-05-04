import express, { json } from "express";
import * as bcrypt from 'bcrypt';
import { modeloUsuario } from "../models/modeloUsuario";

export default {
//Usuarios
get_todos_usuarios: async (_req: express.Request, _res: express.Response) => {
    const output = await modeloUsuario.find()
    const output = await modeloUsuario.findOne({ })
    //return output
    _res.status(200).send(output)
},
//Autenticacion
post_usuario: async (_req: express.Request, _res: express.Response) => {
    let output = await
     modeloUsuario.create(_req.body)
    
    //return output
    _res.status(200).send(output)
},
}