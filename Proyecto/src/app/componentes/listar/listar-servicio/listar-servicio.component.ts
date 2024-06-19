import { Component } from '@angular/core';
import { Servicio } from '../../../interfaces/Servicio/Servicio';
import { ServicioService } from '../../../servicios/servicios/servicios.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-servicio',
  templateUrl: './listar-servicio.component.html',
  styleUrl: './listar-servicio.component.css'
})

export class ListarServicioComponent {
  ListarsServicio: Servicio[] = []
  loading: boolean = false;

  constructor(private _servicioService: ServicioService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getListServicios();
  }

  getListServicios() {
    this.loading = true;

    this._servicioService.getListServicios().subscribe((data: Servicio[]) => {
      this.ListarsServicio = data;
      this.loading = false;
    })
  }

  deleteProduct(id: number) {
    this.loading = true;
    this._servicioService.deleteServicio(id).subscribe(() => {
      this.getListServicios();
      this.toastr.warning('El servicio fue eliminado con éxito', 'Servicio eliminado');
    })
  }
}
