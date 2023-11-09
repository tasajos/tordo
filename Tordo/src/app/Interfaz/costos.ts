export interface CostoFijo {
    id?: number;
    concepto: string;
    monto: number;
    fechacostofijo: Date;
  }
  
  export interface CostoVariable {
    id?: number;
    concepto: string;
    monto: number;
    fechacostovariable: Date;
  }
  