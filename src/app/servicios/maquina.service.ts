import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AppConfiguracion } from '../clases/app-configuracion';
import { Maquina } from '../clases/maquina';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private url: string = AppConfiguracion.getURL()+"/api/maquina";
  private header              = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  constructor(private http: HttpClient, private router: Router) { }

  public getListado(): Observable<Maquina[]> {
    return this.http.get<Maquina[]>(this.url);
  }

  public getPorId(id:number):Observable<Maquina> {
    return this.http.get<Maquina>(this.url+'/'+id);
  }

  public create(maquina: Maquina): Observable<any>{
    return this.http.post<Maquina>(this.url, maquina, { headers: this.header }).pipe(
      map((response: any) => response.maquina as Maquina),
      catchError(
        jsonError => {
          return throwError(jsonError)
        }
      )
    );
  }

  public actualizarEstado(idMaquina: number): Observable<any> {
    return this.http.put<any>(this.url + '/estado/' + idMaquina, { headers: this.header });
  }
  public actualizarMaquina(idMaquina: number,maquina: Maquina): Observable<any> {
    return this.http.put<any>(this.url + '/'+idMaquina, maquina,{ headers: this.header }).pipe(
      map((response: any) => response.maquina as Maquina),
      catchError(
        jsonError => {
          return throwError(jsonError)
        }
      )
    );
  }

  public getListadoActivas(): Observable<Maquina[]> {
    return this.http.get<Maquina[]>(this.url + '/activas');
  }
}
