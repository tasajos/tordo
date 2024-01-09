//La interfaz es la que interactua con la base de datos, en este caso con la tabla Rflota

export interface registrarflotaInter {

    id?: number,
    placa: string,
    conductor: string,
    hora:string,
    tipo:string,
    cantidadpasajeros:string,
    origen:string,
    destino:string,
    estado:string,
    precio:number,
    FechaCreacion?: Date,
    fecharegistro: Date,
    mensaje?: string;
    }

