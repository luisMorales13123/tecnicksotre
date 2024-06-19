import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipoService } from '../../../servicios/Equipo/equipo.service';
import { equipo } from '../../../interfaces/Equipo/Equipo';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-Equipo',
  templateUrl: './agregar-editar-equipo.component.html',
  styleUrls: ['./agregar-editar-equipo.component.css']
})

export class AgregarEditarEquipoComponent implements OnInit{
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: EquipoService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      descInconveniente:['',Validators.required],
      idMarca:[null,Validators.required],
      idTipoEquipo:[null,Validators.required],
      idUusario:[null,Validators.required]

    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: equipo) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        descInconveniente:data.descInconveniente,
        idMarca:data.idMarca,
        idTipoEquipo: data.idTipoEquipo,
        idUusario: data.idUsuario
      })
    })
  }

  addProduct() {
    const product: equipo = {
      id:this.form.value.id,
      descInconveniente: this.form.value.descInconveniente,
      idMarca: this.form.value.idMarca,
      idTipoEquipo: this.form.value.idTipoEquipo,
      idUsuario: this.form.value.idUusario
    }
  
    this.loading = true;
  
    if (this.id !== 0) {
      // Es editar
      product.id = this.id; // Asignamos el id del equipo
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(`El equipo  ${product.id} fue actualizado con exito`, 'Equipo actualizado');
        this.loading = false;
        this.router.navigate(['/producto']);
      });
  
    } else {
      // Es agregar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El equipo con id ${product.id} fue registrado con exito`, 'Equipo registrado');
        this.loading = false;
        this.router.navigate(['/producto']);
      });
    }
  }
  
}
