import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { factura} from '../../interfaces/Factura/Factura';

@Injectable({
  providedIn: 'root'
})
export class facturaService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/Factura/Factura/'
  }
//Listar Producto
  getListProducts(): Observable<factura[]>{
return this.http.get<factura[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(usuario: factura):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,usuario)
  }


  getProduct(id:number):Observable<factura>{
return this.http.get<factura> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, user: factura): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, user);
    }


  }