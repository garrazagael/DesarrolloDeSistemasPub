import { Router } from "express";
import DB from "../controllers/DB";
export const routerUsuario = Router();

routerUsuario.get     ("/",         DB.get_todos_usuarios   );
routerUsuario.post    ("/",         DB.post_usuario         );
/*
routerUsuario.get     ("/:id",      DB.get_productos_id);
routerUsuario.get     ("/:nombre",  DB.get_productos_nombre);
routerUsuario.post    ("/",         DB.post_producto);
routerUsuario.delete  ("/:id",      DB.delete_producto_id);
routerUsuario.delete  ("/:nombre",  DB.delete_producto_nombre);
routerUsuario.put     ("/:nombre",  DB.put_producto);
routerUsuario.patch   ("/:id",       DB.patch_producto_id);
routerUsuario.patch   ("/:nombre",   DB.patch_producto_nombre);*/