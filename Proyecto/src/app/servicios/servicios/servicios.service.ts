import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Servicio } from '../../interfaces/Servicio/Servicio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private myapp: string;
  private apiurl: string;
  
  constructor(private http: HttpClient) {
    this.myapp = environment.endpoint;
    this.apiurl = 'api/Servicio/';
  }
  // Listar
  getListServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(`${this.myapp}${this.apiurl}Listar`);
  }
  // ELiminar
  deleteServicio(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myapp}${this.apiurl}Eliminar/${id}`)
   }
 
   //Agregar producto
 
   saveServicio(producto: Servicio):Observable<void> {
     return this.http.post<void> (`${this.myapp}${this.apiurl}Agregar`, producto)
   }
 
 
   getProduct(id:number):Observable<Servicio>{
 return this.http.get<Servicio> (`${this.myapp}${this.apiurl}Consultar/${id}`)
 
   }
 
     //Actualizar
 
  
     updateProdcut(id: number, product: Servicio): Observable<void> {
       return this.http.put<void>(`${this.myapp}${this.apiurl}Actualizar/${id}`, product);
     }
}
