import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CargoTecnico } from '../../../interfaces/CargoTecnico/CargoTecnico';
import { CargoTecnicoService } from '../../../servicios/CargoTecnico/cargo-tecnico.service';

@Component({
  selector: 'app-agregar-editar-cargo-tecnico',
  templateUrl: './agregar-editar-cargo-tecnico.component.html',
  styleUrl: './agregar-editar-cargo-tecnico.component.css'
})

export class AgregarEditarCargoTecnicoComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _cargoTecnicoService: CargoTecnicoService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      CargosTecnico: ['', Validators.required],
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
    this._cargoTecnicoService.getProduct(id).subscribe((data: CargoTecnico) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        CargosTecnico: data.CargosTecnico,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: CargoTecnico = {
      id:this.form.value.id,
      CargosTecnico: this.form.value.CargosTecnico,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar
      product.id = this.id;
      this._cargoTecnicoService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.CargosTecnico} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/CargoTecnico']);
      })

    } else {
      // Es agregagar
      this._cargoTecnicoService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.CargosTecnico} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/CargoTecnico']);
      })
    }

  }
}
