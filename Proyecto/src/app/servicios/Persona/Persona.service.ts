import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../../interfaces/Persona/Persona';

@Injectable({
  providedIn: 'root'
})
export class personaService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/Persona/Persona/'
  }
//Listar Producto
  getListProducts(): Observable<persona[]>{
return this.http.get<persona[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(usuario: persona):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,usuario)
  }


  getProduct(id:number):Observable<persona>{
return this.http.get<persona> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, user: persona): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, user);
    }


  }