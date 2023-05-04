import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
import { registroPrecioxFecha } from '../registroPrecioxFecha';

@modelOptions({
  schemaOptions: { collection: 'productos' },
})

class Producto {
  @prop()
  public id!: number;
  
  @prop()
  public nombre!: string;

  @prop()
  public precioXfecha!: Array<registroPrecioxFecha>;
}


export let modeloProducto = getModelForClass(Producto);