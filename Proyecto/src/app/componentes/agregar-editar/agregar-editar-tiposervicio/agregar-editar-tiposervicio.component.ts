import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tipoServicioService } from '../../../servicios/TipoServicio/TipoServicio.service';
import { tiposervicio } from '../../../interfaces/TipoServicio/TipoServicio';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-editar-tiposervicio',
  templateUrl: './agregar-editar-tiposervicio.component.html',
  styleUrl: './agregar-editar-tiposervicio.component.css'
})
export class AgregarEditarTiposervicioComponent {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: tipoServicioService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      TipoServicio: ['', Validators.required],

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
    this._productService.getProduct(id).subscribe((data: tiposervicio) => {
      this.loading = false;
      this.form.setValue({
        id: data.id,
        TipoServicio: data.TipoServicio,

      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: tiposervicio = {
      id:this.form.value.id,
      TipoServicio: this.form.value.TipoServicio,

    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProdcut(this.id, product).subscribe(() => {
        this.toastr.info(`El producto ${product.TipoServicio} fue actualizado con exito`, 'Producto actualizado');
        this.loading = false;
        this.router.navigate(['/Tiposervio']);
      })

    } else {
      // Es agregagar
      this._productService.saveProducto(product).subscribe(() => {
        this.toastr.success(`El producto ${product.TipoServicio} fue registrado con exito`, 'Producto registrado');
        this.loading = false;
        this.router.navigate(['/Tiposervio']);
      })
    }




  }
}
