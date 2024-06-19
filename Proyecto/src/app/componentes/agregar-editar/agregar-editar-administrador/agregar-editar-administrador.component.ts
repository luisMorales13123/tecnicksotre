import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { administrador } from '../../../interfaces/Administrador/Administrador';
import { AdministradorService } from '../../../servicios/Administrador/administrador.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-editar-administrador',
  templateUrl: './agregar-editar-administrador.component.html',
  styleUrls: ['./agregar-editar-administrador.component.css']
})
export class AgregarEditarAdministradorComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _administradorService: AdministradorService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      Persona_idPersona: ['', Validators.required]
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id !== 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

getProduct(id: number) {
  this.loading = true;
  this._administradorService.getProduct(id).subscribe(
    (data: administrador) => {
      this.loading = false;
      this.form.setValue({
        Persona_idPersona: data.Persona_idPersona
      });
    },
    error => {
      console.error('Error al obtener el administrador:', error);
      this.toastr.error('Error al obtener el administrador', 'Error');
      this.loading = false;
    }
  );
}


  addAdministrador() {
    const admin: administrador = {
      id: this.id,
      Persona_idPersona: this.form.value.Persona_idPersona
    };
    this.loading = true;

    // Verificar si existe la persona antes de agregar o actualizar el administrador
    this._administradorService.getProduct(admin.Persona_idPersona).subscribe(
      exists => {
        if (exists) {
          if (this.id !== 0) {
            // Es editar 
            this._administradorService.updateProdcut(this.id, admin).subscribe(
              () => {
                this.toastr.info(`El administrador ${admin.Persona_idPersona} fue actualizado con éxito`, 'Administrador actualizado');
                this.loading = false;
                this.router.navigate(['/Admisnitrador']);
              },
              error => {
                console.error('Error al actualizar el administrador:', error);
                this.toastr.error('Error al actualizar el administrador', 'Error');
                this.loading = false;
              }
            );
          } else {
            // Es agregar
            this._administradorService.saveProducto(admin).subscribe(
              () => {
                this.toastr.success(`El administrador ${admin.Persona_idPersona} fue registrado con éxito`, 'Administrador registrado');
                this.loading = false;
                this.router.navigate(['/Admisnitrador']);
              },
              error => {
                console.error('Error al agregar el administrador:', error);
                this.toastr.error('Error al agregar el administrador', 'Error');
                this.loading = false;
              }
            );
          }
        } else {
          // Mostrar mensaje de error si el Persona_idPersona no existe
          this.toastr.error(`El ID de la persona ${admin.Persona_idPersona} no existe`, 'Error');
          this.loading = false;
        }
      },
      error => {
        console.error('Error al verificar si el id  existe  persona:', error);
        this.toastr.error('Error al verificar si existe la persona', 'Error');
        this.loading = false;
      }
    );
  }
}
