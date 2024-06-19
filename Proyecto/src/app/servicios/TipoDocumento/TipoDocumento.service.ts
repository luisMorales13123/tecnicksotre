import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipodedocumento } from '../../interfaces/TipoDocumento/TipoDocumento';

@Injectable({
  providedIn: 'root'
})
export class DocuemntoService {
private myappUrl:String;
private myapiUrl:String;
  constructor( private http: HttpClient) { 
//Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/TipoDeDocumento/Documento/'
  }
//Listar Producto
  getListProducts(): Observable<tipodedocumento[]>{
return this.http.get<tipodedocumento[]>(`${this.myappUrl}${this.myapiUrl}`);
  }
//Eliminar Producto
  deleteProducto(id: number): Observable<void> {
   return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto

  saveProducto(producto: tipodedocumento):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,producto)
  }


  getProduct(id:number):Observable<tipodedocumento>{
return this.http.get<tipodedocumento> (`${this.myappUrl}${this.myapiUrl}${id}`)

  }

    //Actualizar

 
    updateProdcut(id: number, product: tipodedocumento): Observable<void> {
      return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, product);
    }


  }