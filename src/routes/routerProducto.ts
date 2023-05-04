
import { Router } from "express";
import DB from "../controllers/DB";
export const routerProducto = Router();

routerProducto.get     ("/",         DB.get_todos_productos);
routerProducto.get     ("/:id",      DB.get_productos_id);
routerProducto.get     ("/:nombre",  DB.get_productos_nombre);
routerProducto.post    ("/",         DB.post_producto);
routerProducto.delete  ("/:id",      DB.delete_producto_id);
routerProducto.delete  ("/:nombre",  DB.delete_producto_nombre);
routerProducto.put     ("/:nombre",  DB.put_producto);
routerProducto.patch   ("/:id",       DB.patch_producto_id);
routerProducto.patch   ("/:nombre",   DB.patch_producto_nombre);