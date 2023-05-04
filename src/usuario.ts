export class Usuario {
    id: Number;
    nombre_usuario: String;
    contrasenha: String;

    constructor(id: Number, nombre_usuario: String, contrasenha: String){
        this.id = id;
        this.nombre_usuario = nombre_usuario;
        this.contrasenha = contrasenha;
    }

    public getID(): Number {
        return this.id
    }
    public setID(ID: Number): void {
        this.id = ID
    }

    public getNombreUsuario(): String {
        return this.nombre_usuario;
    }
    public setNombreUsuario(nombre: String): void {
        this.nombre_usuario = nombre;
    }

    public getContrasenha(): String {
        return this.contrasenha;
    }
    public setContrasenha(contrasenha: String): void {
        this.contrasenha = contrasenha;
    }
}