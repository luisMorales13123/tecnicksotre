import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Servicio } from '../../../interfaces/Servicio/Servicio';
import { ServicioService } from '../../../servicios/servicios/servicios.service';

@Component({
  selector: 'app-agregar-editar-servicios',
  templateUrl: './agregar-editar-servicio.component.html',
  styleUrls: ['./agregar-editar-servicio.component.css']
})
export class AgregarEditarServiciosComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
              private _servicioService: ServicioService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
    this.form = this.fb.group({
      descDano: ['', Validators.required],
      ServicioTerminado: ['', Validators.required],
      idEquipoaReparar: ['', Validators.required],
      IdTecnicoEncargado: ['', Validators.required],
      idDuenoServicio: ['', Validators.required],
      TipoServicio_idTipoServicio: ['', Validators.required]
    });
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getService(this.id);
    }
  }

  getService(id: number) {
    this.loading = true;
    this._servicioService.getProduct(id).subscribe((data: Servicio) => {
      this.loading = false;
      this.form.patchValue(data);
    });
  }

  addService() {
    const service: Servicio = this.form.value;
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      service.id = this.id;
      this._servicioService.updateProdcut(this.id, service).subscribe(() => {
        this.toastr.info(`El servicio ${service.descDano} fue actualizado con éxito`, 'Servicio actualizado');
        this.loading = false;
        this.router.navigate(['/Servicio']);
      });
    } else {
      // Es agregar
      this._servicioService.saveServicio(service).subscribe(() => {
        this.toastr.success(`El servicio ${service.descDano} fue registrado con éxito`, 'Servicio registrado');
        this.loading = false;
        this.router.navigate(['/Servicio']);
      });
    }
  }
}
