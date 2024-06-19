import { Component, OnInit } from '@angular/core';
import { tipoequipo } from '../../../interfaces/TipoEquipos/TipoEquipo';
import { ProductoService } from '../../../servicios/TipoEquipo/TipoEquipo.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-products',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  ListarEquipo: tipoequipo[] = []
  loading: boolean = false;

  constructor(private _productService: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: tipoequipo[]) => {
      this.ListarEquipo = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProducto(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}