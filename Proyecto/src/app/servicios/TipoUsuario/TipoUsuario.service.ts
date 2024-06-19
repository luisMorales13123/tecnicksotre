import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipousuario } from '../../interfaces/TipoUsuario/TipoUsuario';

@Injectable({
  providedIn: 'root'
})
export class tipousuarioService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/tipousuario/usuarios/'
  }
//Listar Producto
  getListProducts(): Observable<tipousuario[]>{
return this.http.get<tipousuario[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(usuario: tipousuario):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,usuario)
  }


  getProduct(id:number):Observable<tipousuario>{
return this.http.get<tipousuario> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, user: tipousuario): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, user);
    }


  }