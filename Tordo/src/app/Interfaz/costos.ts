export interface CostoFijo {
    id: number;
    concepto: string;
    monto: number;
  }
  
  export interface CostoVariable {
    id: number;
    concepto: string;
    monto: number;
    fecha: Date;
  }
  