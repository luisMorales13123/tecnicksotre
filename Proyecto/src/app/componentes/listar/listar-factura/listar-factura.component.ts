import { Component, OnInit } from '@angular/core';
import { factura } from '../../../interfaces/Factura/Factura';
import { facturaService } from '../../../servicios/Factura/factura.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrl: './listar-factura.component.css'
})
export class ListarFacturaComponent {

  ListarFactura: factura[] = []
  loading: boolean = false;

  constructor(private _productService: facturaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:factura[]) => {
      this.ListarFactura = data;
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
