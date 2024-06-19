import { Component, OnInit } from '@angular/core';
import { equipo } from '../../../interfaces/Equipo/Equipo';
import { EquipoService } from '../../../servicios/Equipo/equipo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-equipo',
  templateUrl:'./listar-equipo.component.html',
  styleUrls: ['./listar-equipo.component.css'] 
})
export class ListarEquipoComponent implements OnInit{

  ListarEquipo: equipo[] = []
  loading: boolean = false;

  constructor(private _productService: EquipoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: equipo[]) => {
      this.ListarEquipo = data;
      this.loading = false;
    });
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProducto(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
