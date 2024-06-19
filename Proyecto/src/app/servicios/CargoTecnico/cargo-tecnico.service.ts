import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CargoTecnico } from '../../interfaces/CargoTecnico/CargoTecnico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargoTecnicoService {
  private myappUrl:String;
  private myapiUrl:String;

  constructor( private http: HttpClient) {
    //Almacenamos localhost3000
    this.myappUrl = environment.endpoint;
    this.myapiUrl = 'api/CargosTecnico/CargoTecnico/'
  }

  //Listar Producto
  getListProducts(): Observable<CargoTecnico[]>{
    return this.http.get<CargoTecnico[]>(`${this.myappUrl}${this.myapiUrl}`);
  }

  //Eliminar Producto
  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myappUrl}${this.myapiUrl}${id}`)
  }

  //Agregar producto
  saveProducto(producto: CargoTecnico):Observable<void> {
    return this.http.post<void> (`${this.myappUrl}${this.myapiUrl}`,producto)
  }

  getProduct(id:number):Observable<CargoTecnico>{
    return this.http.get<CargoTecnico> (`${this.myappUrl}${this.myapiUrl}${id}`)
  }
  //Actualizar
  updateProdcut(id: number, product: CargoTecnico): Observable<void> {
    return this.http.put<void>(`${this.myappUrl}${this.myapiUrl}${id}`, product);
  }
}
