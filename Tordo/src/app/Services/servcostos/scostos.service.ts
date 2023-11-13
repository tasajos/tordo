import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CostoFijo,CostoVariable } from '../../Interfaz/costos';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr'; // Asegúrate de importar ToastrService desde tu librería de notificaciones


@Injectable({
  providedIn: 'root'
})
export class ScostosService {


//entorno para llamar

private Myappurl: string = environment.endpoint;
private Myapiurlcostofijos: string = 'api/Costos/Fijos';
private Myapiurlcostovariables: string = 'api/Costos/Variables';

   //constructor
   constructor(private http: HttpClient, private toastr: ToastrService) { }


   //costo fijo
   //obtenercostfijo
   getcostofijo(): Observable<CostoFijo[]> {
        
    return this.http.get<CostoFijo[]>(this.Myappurl+this.Myapiurlcostofijos);
  
   }

//addcostfijo
   addcostofijo  (regcf: CostoFijo): Observable<CostoFijo>{

    return this.http.post<CostoFijo>(`${this.Myappurl}${this.Myapiurlcostofijos}`,regcf);
  
  }


//costo variable
//funcion obtener costos variables

   getcostovariable(): Observable<CostoVariable[]> {
        
    return this.http.get<CostoVariable[]>(this.Myappurl+this.Myapiurlcostovariables);
  
   }



   //addcostfijo
   addcostovariable  (regcv: CostoVariable): Observable<CostoVariable>{

    return this.http.post<CostoVariable>(`${this.Myappurl}${this.Myapiurlcostovariables}`,regcv);
  
  }




}
