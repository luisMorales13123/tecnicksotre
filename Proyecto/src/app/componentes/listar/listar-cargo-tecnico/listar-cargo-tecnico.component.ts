import { Component } from '@angular/core';
import { CargoTecnico } from '../../../interfaces/CargoTecnico/CargoTecnico';
import { CargoTecnicoService } from '../../../servicios/CargoTecnico/cargo-tecnico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-cargo-tecnico',
  templateUrl: './listar-cargo-tecnico.component.html',
  styleUrl: './listar-cargo-tecnico.component.css'
})
export class ListarCargoTecnicoComponent {
  ListarCargoTecnico: CargoTecnico[] = []
  loading: boolean = false;

  constructor(private _cargoTecnicoService: CargoTecnicoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts() {
    this.loading = true;

    this._cargoTecnicoService.getListProducts().subscribe((data: CargoTecnico[]) => {
      this.ListarCargoTecnico = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._cargoTecnicoService.deleteProducto(id).subscribe(() => {
      this.getListProducts();
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    });
  }
}
