import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tiposervicio } from '../../interfaces/TipoServicio/TipoServicio';

@Injectable({
  providedIn: 'root'
})
export class tipoServicioService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/TipoDeservicio/Tiposervio/'
  }
//Listar Producto
  getListProducts(): Observable<tiposervicio[]>{
return this.http.get<tiposervicio[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(usuario: tiposervicio):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,usuario)
  }


  getProduct(id:number):Observable<tiposervicio>{
return this.http.get<tiposervicio> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, user: tiposervicio): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, user);
    }


  }