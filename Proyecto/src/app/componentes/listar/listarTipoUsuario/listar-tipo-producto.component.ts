import { Component, OnInit } from '@angular/core';
import { tipousuario } from '../../../interfaces/TipoUsuario/TipoUsuario';
import { tipousuarioService } from '../../../servicios/TipoUsuario/TipoUsuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-tipo-producto',
  templateUrl: './listar-tipo-producto.component.html',
  styleUrl: './listar-tipo-producto.component.css'
})
export class ListarTipoProductoComponent {
  ListarTipoUsuario: tipousuario[] = []
  loading: boolean = false;

  constructor(private _productService: tipousuarioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:tipousuario[]) => {
      this.ListarTipoUsuario = data;
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
