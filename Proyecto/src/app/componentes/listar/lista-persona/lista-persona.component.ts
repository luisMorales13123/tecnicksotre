import { Component, OnInit } from '@angular/core';
import { persona } from '../../../interfaces/Persona/Persona';
import { personaService } from '../../../servicios/Persona/Persona.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrl: './lista-persona.component.css'
})
export class ListaPersonaComponent {

  ListarPersona: persona[] = []
  loading: boolean = false;

  constructor(private _productService: personaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListProductsTipoUsuario();
  }

  getListProductsTipoUsuario() {
    this.loading = true;

    this._productService.getListProducts().subscribe((data:persona[]) => {
      this.ListarPersona = data;
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
