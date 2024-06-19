import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoequipo } from '../../interfaces/TipoEquipos/TipoEquipo';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/TipoEquipo/equipos/'
  }
//Listar Producto
  getListProducts(): Observable<tipoequipo[]>{
return this.http.get<tipoequipo[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(producto: tipoequipo):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,producto)
  }


  getProduct(id:number):Observable<tipoequipo>{
return this.http.get<tipoequipo> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, product: tipoequipo): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, product);
    }


  }