import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: { collection: 'usuarios' },
})

class Usuario {
  @prop()
  public id!: number;
  
  @prop()
  public nombre!: string;

  @prop()
  public contrasenha!: string;
}

export let modeloUsuario = getModelForClass(Usuario);