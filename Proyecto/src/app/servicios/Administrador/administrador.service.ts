import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { administrador } from '../../interfaces/Administrador/Administrador';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private myappUrl:String;
  private myapiUrl:String;
    constructor( private http: HttpClient) { 
  //Almacenamos localhost3000
      this.myappUrl = environment.endpoint;
      this.myapiUrl = 'api/Adiministrador/Administrador/'
    }
  //Listar Producto
    getListProducts(): Observable<administrador[]>{
  return this.http.get<administrador[]>(`${this.myappUrl}${this.myapiUrl}`);
    }
  //Eliminar Producto
    deleteProducto(id: number): Observable<void> {
     return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
    }
  
    //Agregar producto
  
    saveProducto(producto: administrador):Observable<void> {
      return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,producto)
    }
  
  
    getProduct(id:number):Observable<administrador>{
  return this.http.get<administrador> (`${this.myappUrl}${this.myapiUrl}${id}`)
  
    }
  
      //Actualizar
  
   
      updateProdcut(id: number, product: administrador): Observable<void> {
        return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, product);
      }
}
