import { Component, OnInit } from '@angular/core';
import { administrador } from '../../../interfaces/Administrador/Administrador';
import { AdministradorService } from '../../../servicios/Administrador/administrador.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-administrador',
  templateUrl: './listar-administrador.component.html',
  styleUrl: './listar-administrador.component.css'
})
export class ListarAdministradorComponent {
  ListarAdministrador: administrador[] = []
  loading: boolean = false;

  constructor(private _productService: AdministradorService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:administrador[]) => {
      this.ListarAdministrador = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._productService.deleteProducto(id).subscribe(() => {
      this.getListProductsTipoUsuario();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}
