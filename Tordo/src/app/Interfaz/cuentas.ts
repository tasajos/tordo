export interface Activo {
    id: number;
    categoria: string;
    descripcion: string;
    monto: number;
    fechaAdquisicion: Date;
    fechaValoracion?: Date;
    vidaUtilEstimada?: number;
}

export interface Pasivo {
    id: number;
    categoria: string;
    descripcion: string;
    monto: number;
    fechaIncidencia: Date;
    fechaVencimiento: Date;
}

export interface Patrimonio {
    id: number;
    tipo: string;
    descripcion: string;
    monto: number;
    fechaRegistro: Date;
}

export interface Ingreso {
    id: number;
    categoria: string;
    descripcion: string;
    monto: number;
    fechaRegistro: Date;
    fuente: string;
    cuentaRelacionadaId: number;
}

export interface Egreso {
    id: number;
    categoria: string;
    descripcion: string;
    monto: number;
    fechaRegistro: Date;
    destinatario: string;
    cuentaRelacionadaId: number;
}
