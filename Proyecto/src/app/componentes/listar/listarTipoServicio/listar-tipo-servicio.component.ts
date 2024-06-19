import { Component, OnInit } from '@angular/core';
import { tiposervicio } from '../../../interfaces/TipoServicio/TipoServicio';
import { tipoServicioService } from '../../../servicios/TipoServicio/TipoServicio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tipo-servicio',
  templateUrl: './listar-tipo-servicio.component.html',
  styleUrl: './listar-tipo-servicio.component.css'
})
export class ListarTipoServicioComponent {
  ListarTipoServicio: tiposervicio[] = []
  loading: boolean = false;

  constructor(private _productService: tipoServicioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:tiposervicio[]) => {
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
