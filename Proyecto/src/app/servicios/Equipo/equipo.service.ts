import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { equipo } from '../../interfaces/Equipo/Equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
private myappUrl:String;
private myapiUrl:String;
  equipo: any;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/Equipo/equipo/'
  }
//Listar Producto
  getListProducts(): Observable<equipo[]>{
return this.http.get<equipo[]>(`${this.myappUrl}${this.myapiUrl}`);
  }

//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(producto: equipo):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,producto)
  }


  getProduct(id:number):Observable<equipo>{
return this.http.get<equipo> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProduct(id: number, product: equipo): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, product);
    }


  }