//La interfaz es la que interactua con la base de datos, en este caso con la tabla Rflota

export interface registrarflotaInter {

    id?: number,
    placa: string,
    conductor: string,
    hora:string,
    tipo:string,
    cantidadpasajeros:string,
    
    }

