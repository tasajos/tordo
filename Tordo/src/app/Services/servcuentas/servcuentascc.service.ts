import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activo, Pasivo, Patrimonio, Ingreso, Egreso } from '../../Interfaz/cuentas';
import { ToastrService } from 'ngx-toastr'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServcuentasccService {


  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Activo';
 
  private apiUrls = {
    activo: 'api/Activo',
    pasivo: 'api/Pasivo',
    patrimonio: 'api/Patrimonio',
    ingreso: 'api/Ingreso',
    egreso: 'api/Egreso'
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  // Métodos para Activos
  getActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${this.Myappurl}${this.apiUrls.activo}`);
  }

  getActivo(id: number): Observable<Activo> {
    return this.http.get<Activo>(`${this.Myappurl}${this.apiUrls.activo}/${id}`);
  }

  createActivo(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(`${this.Myappurl}${this.apiUrls.activo}`, activo);
  }

  updateActivo(activo: Activo): Observable<any> {
    return this.http.put(`${this.Myappurl}/${this.apiUrls.activo}/${activo.id}`, activo);
  }

  deleteActivo(id: number): Observable<Activo> {
    return this.http.delete<Activo>(`${this.Myappurl}${this.apiUrls.activo}/${id}`);
  }

  // Agregar métodos similares para Pasivos, Patrimonios, Ingresos, Egresos...

  // Ejemplo para Pasivos
 

  getPasivo(): Observable<Pasivo[]> {
    return this.http.get<Pasivo[]>(`${this.Myappurl}${this.apiUrls.pasivo}`);
  }

  getPasivos(id: number): Observable<Pasivo> {
    return this.http.get<Pasivo>(`${this.Myappurl}${this.apiUrls.pasivo}/${id}`);
  }

  createPasivo(Pasivo: Pasivo): Observable<Pasivo> {
    return this.http.post<Pasivo>(`${this.Myappurl}${this.apiUrls.pasivo}`, Pasivo);
  }

  updatePasivo(Pasivo: Pasivo): Observable<any> {
    return this.http.put(`${this.Myappurl}/${this.apiUrls.pasivo}/${Pasivo.id}`, Pasivo);
  }

  BorrarPasivo(id: number): Observable<Pasivo> {
    return this.http.delete<Pasivo>(`${this.Myappurl}${this.apiUrls.pasivo}/${id}`);
  }

  // Métodos para Patrimonios
getPatrimonios(): Observable<Patrimonio[]> {
  return this.http.get<Patrimonio[]>(`${this.Myappurl}${this.apiUrls.patrimonio}`);
}

getPatrimonio(id: number): Observable<Patrimonio> {
  return this.http.get<Patrimonio>(`${this.Myappurl}${this.apiUrls.patrimonio}/${id}`);
}

createPatrimonio(patrimonio: Patrimonio): Observable<Patrimonio> {
  return this.http.post<Patrimonio>(`${this.Myappurl}${this.apiUrls.patrimonio}`, patrimonio);
}

updatePatrimonio(patrimonio: Patrimonio): Observable<any> {
  return this.http.put(`${this.Myappurl}/${this.apiUrls.patrimonio}/${patrimonio.id}`, patrimonio);
}

deletePatrimonio(id: number): Observable<Patrimonio> {
  return this.http.delete<Patrimonio>(`${this.Myappurl}${this.apiUrls.patrimonio}/${id}`);
}

// Métodos para Ingresos
getIngresos(): Observable<Ingreso[]> {
  return this.http.get<Ingreso[]>(`${this.Myappurl}${this.apiUrls.ingreso}`);
}

getIngreso(id: number): Observable<Ingreso> {
  return this.http.get<Ingreso>(`${this.Myappurl}${this.apiUrls.ingreso}/${id}`);
}

createIngreso(ingreso: Ingreso): Observable<Ingreso> {
  return this.http.post<Ingreso>(`${this.Myappurl}${this.apiUrls.ingreso}`, ingreso);
}

updateIngreso(ingreso: Ingreso): Observable<any> {
  return this.http.put(`${this.Myappurl}/${this.apiUrls.ingreso}/${ingreso.id}`, ingreso);
}

deleteIngreso(id: number): Observable<Ingreso> {
  return this.http.delete<Ingreso>(`${this.Myappurl}${this.apiUrls.ingreso}/${id}`);
}


// Métodos para Egresos
getEgresos(): Observable<Egreso[]> {
  return this.http.get<Egreso[]>(`${this.Myappurl}${this.apiUrls.egreso}`);
}

getEgreso(id: number): Observable<Egreso> {
  return this.http.get<Egreso>(`${this.Myappurl}${this.apiUrls.egreso}/${id}`);
}

createEgreso(egreso: Egreso): Observable<Egreso> {
  return this.http.post<Egreso>(`${this.Myappurl}${this.apiUrls.egreso}`, egreso);
}

updateEgreso(egreso: Egreso): Observable<any> {
  return this.http.put(`${this.Myappurl}/${this.apiUrls.egreso}/${egreso.id}`, egreso);
}

deleteEgreso(id: number): Observable<Egreso> {
  return this.http.delete<Egreso>(`${this.Myappurl}${this.apiUrls.egreso}/${id}`);
}

  // Continúa con los métodos para Patrimonio, Ingreso y Egreso
}