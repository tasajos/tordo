import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { registrarflotaInter } from '../Interfaz/flota';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


//SERVICIO ES EL QUE INTERACTUA CON EL BACKEND

@Injectable({
  providedIn: 'root'
})
export class SflotaService {


  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Flta';
  private Myapiurlb: string = 'api/Flta/buscar';

  //constructor
  constructor(private http: HttpClient) { }

//funcion obtejer flota

getflota(): Observable<registrarflotaInter[]> {
     
  return this.http.get<registrarflotaInter[]>(this.Myappurl+this.Myapiurl);

 }
addflota  (regd: registrarflotaInter): Observable<registrarflotaInter>{

  return this.http.post<registrarflotaInter>(`${this.Myappurl}${this.Myapiurl}`,regd);

}

buscarFlotaPorOrigenYDestino(origen: string, destino: string): Observable<registrarflotaInter[]> {
  // Corrige la construcción de la URL, no es necesario usar this.origen y this.destino
  const params = { origen, destino };
  return this.http.get<registrarflotaInter[]>(`${this.Myappurl}${this.Myapiurlb}/${origen}/${destino}`);
}
}
 