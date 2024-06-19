import { Component, OnInit } from '@angular/core';
import { tipodedocumento } from '../../../interfaces/TipoDocumento/TipoDocumento';
import { DocuemntoService } from '../../../servicios/TipoDocumento/TipoDocumento.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listar-tipo-documento',
  templateUrl: './listar-tipo-documento.component.html',
  styleUrl: './listar-tipo-documento.component.css'
})
export class ListarTipoDocumentoComponent {
  ListarDocumento: tipodedocumento[] = []
  loading: boolean = false;

  constructor(private _productService: DocuemntoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data: tipodedocumento[]) => {
      this.ListarDocumento = data;
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
