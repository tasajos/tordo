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
    categoria: string;
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

export interface EstructuraDto {
    tipo: string;
    niveles: number;
    subniveles: number[];
  }
  
  export interface Estructura {
    id: number;
    nombre: string;
    tipo: string;
    nivel: number;
    subniveles?: Estructura[]; // Subniveles es opcional y puede ser una lista de estructuras
  }
  
  export interface Finanza {
    id: number;
    categoria: string;
    descripcion: string;
    monto: number;
    fecha?: Date; // Fecha general para cualquier tipo de finanza
    tipo?: string;
    Etipo?: string; // Puede ser 'Activo', 'Pasivo', 'Patrimonio', 'Ingreso', 'Egreso'
    // ... Otras propiedades específicas
}