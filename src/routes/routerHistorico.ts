
import { Router } from "express";
import DB from "../controllers/DB";
export const routerHistorico = Router();

routerHistorico.get     ("/",         DB.get_todos_registros);
routerHistorico.get     ("/:precio",  DB.get_precio_registro);
routerHistorico.get     ("/:fecha",   DB.get_fecha_registro);
routerHistorico.post    ("/",         DB.post_registro);
routerHistorico.delete  ("/:precio",  DB.delete_registro_precio);
routerHistorico.delete  ("/:fecha",   DB.delete_registro_fecha);
routerHistorico.put     ("/:precio",  DB.put_registro);
routerHistorico.patch   ("/:precio",  DB.patch_registro_precio);
routerHistorico.patch   ("/:fecha",   DB.patch_registro_fecha);