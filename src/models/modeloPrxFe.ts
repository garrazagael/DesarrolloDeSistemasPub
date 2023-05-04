import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
    schemaOptions: { collection: 'precioXfecha' },
})

class PrecioXfecha {
    @prop()
    public precio!: number;
    
    @prop()
    public fecha!: string;
}

export let modeloPrXFe = getModelForClass(PrecioXfecha);
