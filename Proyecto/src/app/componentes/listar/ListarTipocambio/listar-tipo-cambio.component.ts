import { Component, OnInit } from '@angular/core';
import { tipocambio } from '../../../interfaces/TipoCambio/TipoCambio';
import { TipocambioService } from '../../../servicios/TipoCambio/tipocambio.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-listar-tipo-cambio',
  templateUrl: './listar-tipo-cambio.component.html',
  styleUrl: './listar-tipo-cambio.component.css'
})
export class ListarTipoCambioComponent {
  ListarTipoServicio: tipocambio[] = []
  loading: boolean = false;

  constructor(private _productService: TipocambioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:tipocambio[]) => {
      this.ListarTipoServicio = data;
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
