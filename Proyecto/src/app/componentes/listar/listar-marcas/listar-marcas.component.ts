import { Component } from '@angular/core';
import { Marcas } from '../../../interfaces/Marcas/Marcas';
import { ToastrService } from 'ngx-toastr';
import { MarcasService } from '../../../servicios/marcas/marcas.service';

@Component({
  selector: 'app-listar-marcas',
  templateUrl: './listar-marcas.component.html',
  styleUrls: ['./listar-marcas.component.css'],
})

export class ListarMarcasComponent {

  ListarMarcas: Marcas[] = []
  loading: boolean = false;

  constructor(private _marcasService: MarcasService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._marcasService.getListMarcas().subscribe((data: Marcas[]) => {
      this.ListarMarcas = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._marcasService.deleteProducto(id).subscribe(() => {
      this.getListProductsTipoUsuario();
      this.toastr.warning('La marca fue eliminada con éxito', 'Producto eliminado');
    })
  }
}