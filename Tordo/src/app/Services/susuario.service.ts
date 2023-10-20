import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegistroUsuarioTicketInter } from '../Interfaz/usuario';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

//SERVICIO QUE INTERACTUA CON EL BACKEND

@Injectable({
  providedIn: 'root'
})
export class SusuarioService {


  //entorno para llamar

  private Myappurl: string = environment.endpoint;
  private Myapiurl: string = 'api/Pasj';

  //constructor
  constructor(private http: HttpClient) { }

//funcion obtener Pasajero

getpasajeros(): Observable<RegistroUsuarioTicketInter[]> {
     
  return this.http.get<RegistroUsuarioTicketInter[]>(this.Myappurl+this.Myapiurl);

 }

 //Incorporar Registros Pasajero

addpasajeroti  (regpt: RegistroUsuarioTicketInter): Observable<RegistroUsuarioTicketInter>{

  return this.http.post<RegistroUsuarioTicketInter>(`${this.Myappurl}${this.Myapiurl}`,regpt);

}

}
