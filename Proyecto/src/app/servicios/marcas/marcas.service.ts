import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marcas } from '../../interfaces/Marcas/Marcas';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private myapp: string;
  private apiurl: string;
  
  constructor(private http: HttpClient) {
    this.myapp = environment.endpoint;
    this.apiurl = 'api/Marcas/';
  }
  // Listar
  getListMarcas(): Observable<Marcas[]>{
    return this.http.get<Marcas[]>(`${this.myapp}${this.apiurl}Listar`);
  }
  // ELiminar
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myapp}${this.apiurl}Eliminar/${id}`)
   }
 
   //Agregar producto
 
   saveProducto(producto: Marcas):Observable<void> {
     return this.http.post<void> (`${this.myapp}${this.apiurl}Agregar`,producto)
   }
 
 
   getProduct(id:number):Observable<Marcas>{
 return this.http.get<Marcas> (`${this.myapp}${this.apiurl}Consultar/${id}`)
 
   }
 
     //Actualizar
 
  
     updateProdcut(id: number, product: Marcas): Observable<void> {
       return this.http.put<void>(`${this.myapp}${this.apiurl}Actualizar/${id}`, product);
     }
}
