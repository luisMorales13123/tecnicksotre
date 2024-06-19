import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../../servicios/TipoEquipo/TipoEquipo.service';
import { tipoequipo } from '../../../interfaces/TipoEquipos/TipoEquipo';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-edit-product',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: ProductoService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      Equipo: ['', Validators.required],

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
    this._productService.getProduct(id).subscribe((data: tipoequipo) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        Equipo: data.TipoEquipo,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: tipoequipo = {
      id:this.form.value.id,
      TipoEquipo: this.form.value.Equipo,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.TipoEquipo} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/TipoEquipo']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.TipoEquipo} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/TipoEquipo']);
      })
    }




  }

}